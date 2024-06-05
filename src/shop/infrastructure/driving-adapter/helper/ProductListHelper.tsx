import { ImplementationAxios as AxiosProduct } from "@/shop/infrastructure/implementation/axios/product";
import { GetAllUseCase as ProductUseCaseGetAll } from '@/shop/application/use_cases/product'

import { useQuery } from "@tanstack/react-query";

export const ProductListHelper = () => {

    const shop_id = `${import.meta.env.VITE_SHOP_ID}`
  
    
    // Loaded Data Product  
    const productRepository = new AxiosProduct()
    const productUseCase = new ProductUseCaseGetAll(productRepository)   
  
    const query_product_list = useQuery<any>({ queryKey: ['query_product_list'], queryFn: () => productUseCase.run(shop_id) })

  
    return {
        query_product_list
    }
}