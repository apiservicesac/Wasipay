import { setTotalPriceCart } from "@/core/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks"
import { ProductCartEntity } from "@/shop/domain/entities";
import { setProducts } from "@/shop/infrastructure/driving-adapter/redux/productSlice";

export const HelperCart = () => {
    const products = useAppSelector((state) => state.productReducer.products)
    const total_cart_price = useAppSelector((state) => state.cartReducer.total_price)

    const dispatch = useAppDispatch()

    const addProductCart = (newProduct: ProductCartEntity) => {
        const updatedProducts = [...products!]?.map((p: ProductCartEntity) => {
            if (p.product?._id === newProduct?.product!._id) {
                const updatedProduct = { ...p };
                updatedProduct.in_cart = true;
                updatedProduct.quantity! ++;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                dispatch(setTotalPriceCart(total_cart_price! + updatedProduct.total_price))
                return updatedProduct;
            }
            return p;
        })
        dispatch(setProducts(updatedProducts))        
    };
    
    const removeProductCart = (product_id: string) => {
        const updatedProducts = [...products!]?.find((p: ProductCartEntity) => p.product?._id === product_id)
        if(updatedProducts){
            const updatedProducts = [...products!]?.map((p: ProductCartEntity) => {
                if (p.product?._id === product_id) {
                    const updatedProduct = { ...p };
                    dispatch(setTotalPriceCart(total_cart_price! - updatedProduct.total_price!))
                    updatedProduct.in_cart = false;
                    updatedProduct.quantity = 0;
                    updatedProduct.total_price = 0;                    
                    return updatedProduct;
                }
                return p;
            })
            dispatch(setProducts(updatedProducts))
        }
    };
    
    const decreaseProductQuantity = (product_id: string) => {  
        const updatedProducts = [...products!]?.map((p: ProductCartEntity) => {
            if (p.product?._id === product_id && p.quantity !== 0) {
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
        dispatch(setProducts(updatedProducts))
    };
    
    const increaseProductQuantity = (product_id: string) => {
        const allProducts = [...products!];    

        const updatedProducts = allProducts?.map((p: ProductCartEntity) => {
            if (p.product?._id === product_id) {
                const updatedProduct = { ...p };
                updatedProduct.quantity! ++;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                dispatch(setTotalPriceCart(total_cart_price! + updatedProduct.product!.price!))
                return updatedProduct;
            }
            return p;
        })
        dispatch(setProducts(updatedProducts))
    };


    return {
        addProductCart,
        removeProductCart,
        increaseProductQuantity,
        decreaseProductQuantity,
    }
}