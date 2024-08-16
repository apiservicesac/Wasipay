import { QueryClient } from '@tanstack/react-query';

import { ImplementationAxios as AxiosShop } from "@/features/shop/infrastructure/implementation/axios";
import { useQuery } from "@tanstack/react-query";
import { ShopEntity } from '@/features/shop/domain/entities';
import { GetByIdUseCase, UpdateFieldUseCase, UpdateUseCase } from '@/features/shop/application/use_cases';


class QueryShop {
    private shop_id = `${import.meta.env.VITE_SHOP_ID}`
    private queryClient: QueryClient;
    private repository: AxiosShop;

    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
        this.repository = new AxiosShop()
    }

    async init(): Promise<void> {
        const shop_use_case = new GetByIdUseCase(this.repository)   

        useQuery({
            queryKey: ['shop_profile'],
            queryFn: () => shop_use_case.run(this.shop_id),
            refetchOnMount: false,
        });
    }
    
    getShop(): ShopEntity {
        const shop = this.queryClient.getQueryData(['shop_profile']);
        return shop as ShopEntity    
    }

    async update(values: ShopEntity): Promise<void> {
        const shop_use_case = new UpdateUseCase(this.repository)   
        const response = await shop_use_case.run(this.shop_id!, values)        
        this.queryClient.cancelQueries({ queryKey: ['shop_profile'] })
        this.queryClient.setQueryData(['shop_profile'], response)     
    }

    async update_field(field: string, values: any): Promise<void> {
        const shopUseCase = new UpdateFieldUseCase(this.repository)   
        const response = await shopUseCase.run(this.shop_id, field, values)                            
        this.queryClient.cancelQueries({ queryKey: ['shop_profile'] })
        this.queryClient.setQueryData(['shop_profile'], response)                             
    }

}

export {
    QueryShop
};
