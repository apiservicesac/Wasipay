import { QueryClient } from '@tanstack/react-query';

import { ImplementationAxios as AxiosProduct } from "@/features/product/infrastructure/implementation/axios";
import { GetAllUseCase as ProductUseCaseGetAll } from '@/features/product/application/use_cases'
import { useQuery } from "@tanstack/react-query";
import { ProductEntity } from '@/features/product/domain/entities';


class QueryProduct {
    private queryClient: QueryClient;
    private productRepository: AxiosProduct;

    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
        this.productRepository = new AxiosProduct()
    }

    async init(): Promise<void> {
        const productUseCase = new ProductUseCaseGetAll(this.productRepository)   
        useQuery({
            queryKey: ['query_product_list'],
            queryFn: () => productUseCase.run(),
            refetchOnMount: false,
        });
    }
    
    getAll(): ProductEntity[] {
        const products = this.queryClient.getQueryData(['query_product_list']);
        return products as ProductEntity[]
    }

    getById(product_id: string): ProductEntity {
        const products : ProductEntity[] | undefined = this.queryClient.getQueryData(['query_product_list'])
        const product = products?.find((item) => item?.id === product_id);
        return product as ProductEntity;
    }

}

export {
    QueryProduct
};
