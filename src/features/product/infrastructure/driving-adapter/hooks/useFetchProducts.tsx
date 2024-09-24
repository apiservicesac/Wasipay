import { useQuery } from "@tanstack/react-query";
import { ImplementationAxios as AxiosProduct } from "@/features/product/infrastructure/implementation/axios";
import { GetAllUseCase as ProductUseCaseGetAll } from '@/features/product/application/use_cases';
import { useSearchParams } from "react-router-dom";
import { setPagination, setProducts } from "@/core/redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { ProductResponse } from "@/features/product/domain/entities/Response";
import { ProductEntity, ProductItemEntity } from "@/features/product/domain/entities";

const useFetchProducts = () => {
    
    const dispatch = useAppDispatch()

    // const { id: shop_id } = useParams();
    const shop_id = import.meta.env.VITE_SHOP_ID
    const [searchParams] = useSearchParams();
    
    const page = searchParams.get('page') || '1';
    const sortby = searchParams.get('sortby') || '';
    const sortorder = searchParams.get('sortorder') || '';
    const search = searchParams.get('search') || '';

    const cart_reducer = useAppSelector((state) => state.cartReducer)
    
    const productRepository = new AxiosProduct();
    const productUseCase = new ProductUseCaseGetAll(productRepository);
    
    return useQuery({
        queryKey: ['query_product_list', shop_id!, parseInt(page), sortby, sortorder, search],
        queryFn: async () => {            
            const response = await productUseCase.run(shop_id!, parseInt(page), sortby, sortorder, search);
            const update_data = response!.products.map((item: ProductEntity) => {
                const cart_product = cart_reducer.products.find((cart_item: ProductItemEntity) => cart_item!.product!.id! === item!.id!)
                
                if (cart_product) {
                    console.log("Producto encontrado en el carrito:", cart_product);
                    console.log({product: item, ...cart_product})
                    return {product: item, ...cart_product};
                } else {
                    console.log("Producto no encontrado, manteniendo el original:", item);
                    return {product: item, quantity: 0, total_price: 0, in_cart: false};
                }
            });            
            dispatch(setPagination(response as ProductResponse));
            dispatch(setProducts(update_data as ProductItemEntity[]))
            return response;
        },
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    });
};

export default useFetchProducts;
