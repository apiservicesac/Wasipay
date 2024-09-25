import { addProductCartStore, resetProductCartStore, setTotalPriceCart } from "@/core/redux/features/cartSlice";
import { setProducts } from "@/core/redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks"
import { ProductItemEntity } from "@/features/product/domain/entities";

export const CartHelper = () => {

    const products : ProductItemEntity[] | undefined = useAppSelector((state) => state.productReducer.products)
    
    const total_cart_price = useAppSelector((state) => state.cartReducer.total_price)
    const cart_products = useAppSelector((state) => state.cartReducer.products)

    const dispatch = useAppDispatch()

    const addProductCart = (product_id: string) => {
        const updatedProducts = [...products!]?.map((p: ProductItemEntity) => {
            if (p.product?.id === product_id) {
                const updatedProduct = { ...p };
                updatedProduct.in_cart = true;
                updatedProduct.quantity! =  1;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                dispatch(setTotalPriceCart(total_cart_price! + updatedProduct.total_price))
                dispatch(addProductCartStore([...cart_products, updatedProduct]))
                return updatedProduct;
            }
            return p;
        })
        dispatch(setProducts(updatedProducts as ProductItemEntity[]))
    };

    const resetProductsCart = () => {  
        const updatedProducts = [...products!]?.map((p: ProductItemEntity) => {
            const updatedProduct = { ...p };
            updatedProduct.quantity = 0
            updatedProduct.total_price = 0;
            updatedProduct.in_cart = false;             
            return updatedProduct;
        })  
        dispatch(setProducts(updatedProducts as ProductItemEntity[]))        
        dispatch(resetProductCartStore())
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
            dispatch(setProducts(updatedProducts as ProductItemEntity[]))
            const products_cart = cart_products?.filter((cart_item:ProductItemEntity) => cart_item.product?.id !== product_id)
            dispatch(addProductCartStore(products_cart))    
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
                    updatedProduct.in_cart = false                   
                }
                return updatedProduct;
            }
            return p;
        })  
        dispatch(setProducts(updatedProducts as ProductItemEntity[]))
        const products_cart =cart_products?.map((cart_item:ProductItemEntity) => {
            if(cart_item.product?.id === product_id) {
                const product = updatedProducts?.find((item:ProductItemEntity) => item.product?.id === product_id)
                return product
            }else {
                return cart_item
            }
        })
        dispatch(addProductCartStore(products_cart))  
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
        dispatch(setProducts(updatedProducts as ProductItemEntity[]))
        const products_cart = cart_products?.map((cart_item:ProductItemEntity) => {
            if(cart_item.product?.id === product_id) {
                const product = updatedProducts?.find((item:ProductItemEntity) => item.product?.id === product_id)
                return product
            }else {
                return cart_item
            }
        })
        dispatch(addProductCartStore(products_cart))
    };


    return {
        addProductCart,
        removeProductCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        resetProductsCart,
    }
}