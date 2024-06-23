import { UseLocalContext } from "@/core/context/UseLocalContext"
import { CreateUseCase, UpdateImagesUseCase } from "@/shop/application/use_cases/product";
import { ProductEntity, ProductItemEntity } from "@/shop/domain/entities";
import { ImplementationAxios as AxiosShop } from "@/shop/infrastructure/implementation/axios/product";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const ProductCompletedHelper = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const products : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])
    const { productCreate } = UseLocalContext()

    const onSubmitCompleted = async () => {
        const shop_id = `${import.meta.env.VITE_SHOP_ID}`

        const productRepository = new AxiosShop()
        const productUseCase = new CreateUseCase(productRepository)   
        const updateUseCase = new UpdateImagesUseCase(productRepository)   


        const { images, ...productWithoutImages } = productCreate!!
        
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
        
        const productCreated : ProductEntity = await productUseCase.run(shop_id, productWithoutImages!)
        const productUpdatedImages : ProductEntity = await updateUseCase.run(productCreated?.id!, formData)       
        const newProduct : ProductItemEntity = {
            product: productUpdatedImages,
            quantity: 0,
            total_price: 0,
            in_cart: false,
        }
        const prevProductItems = products
        queryClient.cancelQueries({ queryKey: ['query_product_list'] })
        queryClient.setQueryData(['query_product_list'], [...prevProductItems!, newProduct])
        navigate("/dashboard/product")
    }



    return {
        productCreate,
        onSubmitCompleted
    }
}