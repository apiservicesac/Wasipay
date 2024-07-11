import { ChangeEvent } from "react";

import { ImplementationAxios as AxiosShop } from "@/shop/infrastructure/implementation/axios/shop";
import { UpdateImageUseCase } from "@/shop/application/use_cases/shop";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProductItemEntity, ShopEntity } from "@/shop/domain/entities";

export const ProfileInfoHelper = () => {

    const queryClient =  useQueryClient()

    const shopRepository = new AxiosShop()
    const shopUseCase = new UpdateImageUseCase(shopRepository)   

    const query_shop_profile : ShopEntity | undefined = queryClient.getQueryData(['shop_profile'])    
    const query_product_list : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])

    
    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        try {    
            const file = Array.from(event.target.files!);
            if (file.length !== 0) {                            
                const formData = new FormData()
                formData.append("images", file[0])        

                const data = await shopUseCase.run(query_shop_profile?.id!, formData)
                
                queryClient.cancelQueries({ queryKey: ['shop_profile'] })
                queryClient.setQueryData(['shop_profile'], data)                 
                toast.success("Datos Actualizados Correctamente.")
            }                        
        }catch(e) {            
            toast.success("Error al actualizar la foto.")
        }      
    };

    return {
        handleImageChange,
        query_shop_profile,
        query_product_list,
    }
}