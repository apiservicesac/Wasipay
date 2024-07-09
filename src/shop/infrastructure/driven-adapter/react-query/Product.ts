import { ProductEntity, ProductItemEntity } from '@/shop/domain/entities';
import { QueryClient } from '@tanstack/react-query';

class ProductAdapter {
    private _product_list: ProductItemEntity[] | undefined;
    private _queryClient: QueryClient;

    constructor(queryClient: QueryClient) {
        this._queryClient = queryClient;
        this._product_list = this._queryClient.getQueryData(['query_product_list']);
    }

    async getAll(): Promise<ProductItemEntity[]> {
        try {
            const products: ProductItemEntity[] = this._product_list!;
            return products;
        } catch (error) {
            throw error;
        }
    }

    async getById(id: string): Promise<ProductItemEntity> {
        try {
            const product = this._product_list?.find((p: ProductItemEntity) => p.product?.id === id)
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw error;
        }
    }

    async create(data: ProductEntity): Promise<void> {
        const newProduct : ProductItemEntity = {
            product: data,
            quantity: 0,
            total_price: 0,
            in_cart: false,
        }
        const prevProductItems = this._product_list
        this._queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        this._queryClient.setQueryData(['query_product_list'], [...prevProductItems!, newProduct])        
    }

    async update(product_id: string, data: ProductEntity): Promise<void> {
        const updatedProducts = this._product_list?.map((p: ProductItemEntity) => {
            if (p.product?.id === product_id) {
                const updatedProduct = { ...p };                
                updatedProduct.product = data;
                return updatedProduct;
            }
            return p;
        })
        this._queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        this._queryClient.setQueryData(['query_product_list'], updatedProducts) 
    }

    async update_field(product_id: string, field: string, value: any): Promise<void> {
        const updatedProducts = this._product_list?.map((p: ProductItemEntity) => {
            if (p.product?.id === product_id) {
                const updatedProduct = { ...p };                
                (updatedProduct as any)[field] = value;
                return updatedProduct;
            }
            return p;
        })
        this._queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        this._queryClient.setQueryData(['query_product_list'], updatedProducts) 
    }

    async delete(id: string): Promise<void> {
        const prevProductItems = this._product_list?.filter((p) => p.product?.id !== id)
        this._queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        this._queryClient.setQueryData(['query_product_list'], prevProductItems)     
    }
}

export {
    ProductAdapter
};
