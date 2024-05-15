import { addProductCartStore } from "@/core/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks"
import { ProductCartEntity, ProductEntity } from "@/shop/domain/entities";

export const HelperCart = () => {
    const products = useAppSelector((state) => state.carttReducer.products)
    const dispatch = useAppDispatch()

    const addProductCart = (newProduct: ProductEntity) => {   
        const allProducts = [...products!];    

        if(allProducts?.length === 0 ){
            const addProduct: ProductCartEntity = {
                product: newProduct,
                quantity: 1,
                total_price: newProduct.price
            };
            allProducts.push(addProduct);
            console.log(allProducts);
            dispatch(addProductCartStore(allProducts))
        }else {
            const updatedProducts = allProducts?.find((p: ProductCartEntity) => p.product?._id === newProduct?._id)
            console.log(updatedProducts)
            if(updatedProducts){
                const updatedProducts = allProducts?.map((p: ProductCartEntity) => {
                    if (p.product?._id === newProduct?._id) {
                        const updatedProduct = { ...p };
                        updatedProduct.quantity! ++;
                        updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                        return updatedProduct;
                    }
                    return p;
                })
                dispatch(addProductCartStore(updatedProducts))
            }
            else {
                const addProduct: ProductCartEntity = {
                    product: newProduct,
                    quantity: 1,
                    total_price: newProduct.price
                };
                allProducts.push(addProduct);
                console.log(allProducts);
                dispatch(addProductCartStore(allProducts))
            }
        }


    };
    
    const removeProductCart = (product_id: string) => {
        const new_state_products = products?.filter((product) => product.product?._id !== product_id)
        console.log(new_state_products)
        dispatch(addProductCartStore(new_state_products!))
    };
    
    const decreaseProductQuantity = (product_id: string) => {
        const allProducts = [...products!];    

        const updatedProducts = allProducts?.map((p: ProductCartEntity) => {
            if (p.product?._id === product_id && p.quantity !== 0) {
                const updatedProduct = { ...p };
                updatedProduct.quantity! --;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                return updatedProduct;
            }
            return p;
        })
        dispatch(addProductCartStore(updatedProducts))
    };
    
    const increaseProductQuantity = (product_id: string) => {
        const allProducts = [...products!];    

        const updatedProducts = allProducts?.map((p: ProductCartEntity) => {
            if (p.product?._id === product_id) {
                const updatedProduct = { ...p };
                updatedProduct.quantity! ++;
                updatedProduct.total_price = updatedProduct.product!.price! * updatedProduct.quantity!;
                return updatedProduct;
            }
            return p;
        })
        dispatch(addProductCartStore(updatedProducts))
    };


    return {
        addProductCart,
        removeProductCart,
        increaseProductQuantity,
        decreaseProductQuantity,
    }
}