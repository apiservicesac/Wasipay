import { ImplementationAxios as AxiosShop } from "@/shop/infrastructure/implementation/axios/shop";

import { GetByIdUseCase as ShopUseCaseGetById } from '@/shop/application/use_cases/shop'
import { useQuery } from "@tanstack/react-query";

export const ShopHelper = () => {

    const shop_id = `${import.meta.env.VITE_SHOP_ID}`
  
    // Loaded Data Shop Profile  
    const shopRepository = new AxiosShop()
    const shopUseCase = new ShopUseCaseGetById(shopRepository) 
    
    const query_shop_profile = useQuery<any>({ queryKey: ['shop_profile'], queryFn: () => shopUseCase.run(shop_id) })

    return {
        query_shop_profile
    }
}