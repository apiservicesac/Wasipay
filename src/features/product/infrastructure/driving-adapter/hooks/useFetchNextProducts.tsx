import { ImplementationAxios as AxiosProduct } from "@/features/product/infrastructure/implementation/axios";
import { GetAllUseCase as ProductUseCaseGetAll } from '@/features/product/application/use_cases';
import { useParams } from "react-router-dom";
import { setProducts } from "@/core/redux/features/productSlice";
import { ProductResponse } from "@/features/product/domain/repositories/Response";
import { useAppDispatch } from "@/core/redux/hooks";

const useFetchNextProducts = async (page: number) => {
    
    const dispatch = useAppDispatch()

    const { id: shop_id } = useParams();

    const productRepository = new AxiosProduct();
    const productUseCase = new ProductUseCaseGetAll(productRepository);
    
    const response = await productUseCase.run(shop_id!, page);
    dispatch(setProducts(response as ProductResponse));

};

export default useFetchNextProducts;
