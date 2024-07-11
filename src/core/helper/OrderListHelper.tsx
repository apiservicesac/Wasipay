import { ImplementationAxios as AxiosOrder } from "@/shop/infrastructure/implementation/axios/order";
import { GetAllUseCase as OrderUseCaseGetAll } from '@/shop/application/use_cases/order'

import { useQuery } from "@tanstack/react-query";

export const OrderListHelper = () => {

    const shop_id = `${import.meta.env.VITE_SHOP_ID}`
    
    const orderRepository = new AxiosOrder()
    const orderUseCase = new OrderUseCaseGetAll(orderRepository)   
  
    const query_order_list = useQuery<any>({ queryKey: ['query_order_list'], queryFn: () => orderUseCase.run(shop_id), refetchOnMount: false })
    
    return {
        query_order_list
    }
}