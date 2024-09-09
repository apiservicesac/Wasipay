// hooks/useProduct.tsx

import { QueryClient } from '@tanstack/react-query';
import { ImplementationAxios as AxiosProduct } from "@/features/product/infrastructure/implementation/axios";
import { ProductEntity } from '@/features/product/domain/entities';

export class QueryProduct {
    private queryClient: QueryClient;
    public productRepository: AxiosProduct;

    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
        this.productRepository = new AxiosProduct();
    }

    getAll(): ProductEntity[] {
        const products = this.queryClient.getQueryData(['query_product_list']);
        return products as ProductEntity[];
    }

    getById(product_id: string): ProductEntity | undefined {
        const products: ProductEntity[] | undefined = this.queryClient.getQueryData(['query_product_list']);
        const product = products?.find((item) => item?.id === product_id);
        return product;
    }
}
