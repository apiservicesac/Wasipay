import { QueryClient } from '@tanstack/react-query';

import { ImplementationAxios as AxiosProduct } from "@/features/product/infrastructure/implementation/axios";
import { CreateUseCase, GetNextCodeUseCase, GetAllUseCase as ProductUseCaseGetAll, UpdateImagesUseCase } from '@/features/product/application/use_cases'
import { useQuery } from "@tanstack/react-query";
import { ProductEntity, ProductItemEntity } from '@/features/product/domain/entities';


class QueryProduct {
    private shop_id = `${import.meta.env.VITE_SHOP_ID}`
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
            queryFn: () => productUseCase.run(this.shop_id),
            refetchOnMount: false,
        });
    }
    
    getAll(): ProductItemEntity[] {
        const products = this.queryClient.getQueryData(['query_product_list']);
        return products as ProductItemEntity[]
    }

    getById(product_id: string): ProductItemEntity {
        const products : ProductItemEntity[] | undefined = this.queryClient.getQueryData(['query_product_list'])
        const product = products?.find((item) => item?.product?.id === product_id);
        return product as ProductItemEntity;
    }

    async nextCodeProduct(): Promise<string> {
        const useCase = new GetNextCodeUseCase(this.productRepository)   
        const product_code = await useCase.run(this.shop_id)
        return product_code
    }

    async create(images: any[], product_data: ProductEntity): Promise<void> {        
        const productUseCase = new CreateUseCase(this.productRepository)   

        const productCreated : ProductEntity = await productUseCase.run(this.shop_id, product_data!)
        const productUpdatedImages = await this.updateImages(productCreated.id!, images)
        const newProduct : ProductItemEntity = {
            product: productUpdatedImages,
            quantity: 0,
            total_price: 0,
            in_cart: false,
        }
        const prevProductItems = this.getAll()
        this.queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        this.queryClient.setQueryData(['query_product_list'], [...prevProductItems!, newProduct])
    }

    async updateImages(product_id: string, images: any[]): Promise<ProductEntity> {

        // Crear un FormData para contener todas las imágenes
        const formData = new FormData();

        // Función para convertir una URL de blob en Blob
        async function fetchBlobFromUrl(url: string): Promise<Blob> {
            try {
                const response = await fetch(url);
                return await response.blob();
            } catch (error) {
                console.error(`Error fetching Blob for ${url}`, error);
                throw error;
            }
        }

        // Array de promesas para obtener todos los Blobs
        const promises: Promise<Blob>[] = Object.keys(images!).map((key:any) => {
            const image = images![key];
            return fetchBlobFromUrl(image?.preview);
        });

        // Resolver todas las promesas
        await Promise.all(promises)
            .then(blobs => {
                // Añadir todos los Blobs al FormData bajo la clave 'images'
                blobs.forEach((blob, index) => {
                    const key : string = Object.keys(images!)[index];
                    const image = images![parseInt(key)];
                    console.log('images', blob, image.name)
                    formData.append('images', blob, image.name);
                });
            })

        const updateUseCase = new UpdateImagesUseCase(this.productRepository)   
        return await updateUseCase.run(product_id, formData) as ProductEntity
    }
}

export {
    QueryProduct
};
