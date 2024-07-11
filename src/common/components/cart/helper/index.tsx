import { setTotalPriceCart } from "@/core/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks"
import { ProductItemEntity } from "@/shop/domain/entities";
import { useQueryClient } from "@tanstack/react-query";

export const CartHelper = () => {
    const queryClient =  useQueryClient()

    const products : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])
    
    const total_cart_price = useAppSelector((state) => state.cartReducer.total_price)

    const dispatch = useAppDispatch()

    const addProductCart = (newProduct: ProductItemEntity) => {
        const updatedProducts = [...products!]?.map((p: ProductItemEntity) => {
            if (p.product?.id === newProduct?.product!.id) {
                const updatedProduct = { ...p };
                updatedProduct.in_cart = true;
                updatedProduct.quantity! ++;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                dispatch(setTotalPriceCart(total_cart_price! + updatedProduct.total_price))
                return updatedProduct;
            }
            return p;
        })

        queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        queryClient.setQueryData(['query_product_list'], updatedProducts)              
    };

    const resetProductsCart = () => {  
        const updatedProducts = [...products!]?.map((p: ProductItemEntity) => {
            const updatedProduct = { ...p };
            updatedProduct.quantity = 0
            updatedProduct.total_price = 0;
            updatedProduct.in_cart = false;             
            return updatedProduct;
        })
        queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        queryClient.setQueryData(['query_product_list'], updatedProducts) 
    };
    
    const removeProductCart = (product_id: string) => {
        const updatedProducts = [...products!]?.find((p: ProductItemEntity) => p.product?.id === product_id)
        if(updatedProducts){
            const updatedProducts = [...products!]?.map((p: ProductItemEntity) => {
                if (p.product?.id === product_id) {
                    const updatedProduct = { ...p };
                    dispatch(setTotalPriceCart(total_cart_price! - updatedProduct.total_price!))
                    updatedProduct.in_cart = false;
                    updatedProduct.quantity = 0;
                    updatedProduct.total_price = 0;                    
                    return updatedProduct;
                }
                return p;
            })
            queryClient.cancelQueries({ queryKey: ['query_product_list'] })
            queryClient.setQueryData(['query_product_list'], updatedProducts) 
        }
    };
    
    const decreaseProductQuantity = (product_id: string) => {  
        const updatedProducts = [...products!]?.map((p: ProductItemEntity) => {
            if (p.product?.id === product_id && p.quantity !== 0) {
                const updatedProduct = { ...p };
                updatedProduct.quantity! --;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                dispatch(setTotalPriceCart(total_cart_price! - updatedProduct.product!.price!))
                if(updatedProduct.quantity === 0) {                    
                    updatedProduct.in_cart = false;                   
                }
                return updatedProduct;
            }
            return p;
        })
        queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        queryClient.setQueryData(['query_product_list'], updatedProducts) 
    };
    
    const increaseProductQuantity = (product_id: string) => {
        const allProducts = [...products!];    

        const updatedProducts = allProducts?.map((p: ProductItemEntity) => {
            if (p.product?.id === product_id) {
                const updatedProduct = { ...p };
                updatedProduct.quantity! ++;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                dispatch(setTotalPriceCart(total_cart_price! + updatedProduct.product!.price!))
                return updatedProduct;
            }
            return p;
        })
        queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        queryClient.setQueryData(['query_product_list'], updatedProducts) 
    };


    return {
        addProductCart,
        removeProductCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        resetProductsCart,
    }
}