import { useQuery } from "@tanstack/react-query";
import { ImplementationAxios as AxiosProduct } from "@/features/product/infrastructure/implementation/axios";
import { GetAllUseCase as ProductUseCaseGetAll } from '@/features/product/application/use_cases';
import { useParams, useSearchParams } from "react-router-dom";
import { setProducts } from "@/core/redux/features/productSlice";
import { ProductResponse } from "@/features/product/domain/repositories/Response";
import { useAppDispatch } from "@/core/redux/hooks";

const useFetchProducts = () => {
    
    const dispatch = useAppDispatch()

    const { id: shop_id } = useParams();
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1';

    const productRepository = new AxiosProduct();
    const productUseCase = new ProductUseCaseGetAll(productRepository);
    
    return useQuery({
        queryKey: ['query_product_list', shop_id!, parseInt(page)],
        queryFn: async () => {
            console.log(shop_id, page);
            const response = await productUseCase.run(shop_id!, parseInt(page));
            dispatch(setProducts(response as ProductResponse));
            return response;
        },
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    });
};

export default useFetchProducts;
