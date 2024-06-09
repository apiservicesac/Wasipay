import { CardData, ShopEntity } from "@/shop/domain/entities";
import { useQueryClient } from "@tanstack/react-query";
import React, { ChangeEvent } from "react";


import { ImplementationAxios as AxiosShop } from "@/shop/infrastructure/implementation/axios/shop";
import { UpdateFieldUseCase } from "@/shop/application/use_cases/shop";
import { toast } from "sonner";

export const IntegrationTabHelper = () => {

    const queryClient =  useQueryClient()

    const shop : ShopEntity | undefined = queryClient.getQueryData(['shop_profile'])

    const [cardData, setCardData] = React.useState<CardData[]>([])

    const shopRepository = new AxiosShop()
    const shopUseCase = new UpdateFieldUseCase(shopRepository)   
    

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>, key: string) => {
        const updatedCardData = cardData.map((item) => {
            if(item.id === key){
                item.user_name = event.target.value
            }
            return item
        });
        setCardData(updatedCardData)       
    }

    const onEditModeInput = async (key: string) => {
        
        const updatedCardData = await Promise.all(
            cardData.map(async (item) => {
                if(item.id === key){
                    if(item.editable){
                        try {
                            const mappedData = cardData.reduce((acc, item) => {
                                acc[item.id] = item.user_name;
                                return acc;
                            }, {} as { [key: string]: string });                    

                            const response = await shopUseCase.run(shop?.id!, 'social_media', mappedData)                            

                            queryClient.cancelQueries({ queryKey: ['shop_profile'] })
                            queryClient.setQueryData(['shop_profile'], response)                 
                            
                            toast.success("Datos Actualizados Correctamente.")
                        }catch(e) {
                            toast.success("Error al actualizar.")
                        }
                    }
                    item.editable = !item.editable
                }
                return item
            })
        )
        setCardData(updatedCardData)       
    }

    const onLoadCardData = () => {
        setCardData([
            {
                id: "tiktok",
                logo: {
                    icon: 'ri-tiktok-line',
                    style: 'text-[#37C5BB] bg-[#C0F2EF]',
                },
                title: 'Tiktok',
                user_name: shop?.social_media?.tiktok!,
                editable: false,
            },
            {
                id: "instagram",
                logo: {
                    icon: 'ri-instagram-line',
                    style: 'text-pink-500 bg-pink-100',
                },
                title: 'Instagram',
                user_name: shop?.social_media?.instagram!,
                editable: false,
            },
            {
                id: "facebook",
                logo: {
                    icon: 'ri-facebook-fill',
                    style: 'text-sky-500 bg-sky-100',
                },
                title: 'Facebook',
                user_name: shop?.social_media?.facebook!,
                editable: false,
            },
            // {
            //     id: "youtube",
            //     logo: {
            //         icon: 'ri-youtube-line',
            //         style: 'text-red-500 bg-red-100',
            //     },
            //     title: 'Youtube',
            //     user_name: shop?.social_media?.youtube!,
            //     editable: false,
            // },
            {
                id: "whatsapp",
                logo: {
                    icon: 'ri-whatsapp-line',
                    style: 'text-green-500 bg-green-100',
                },
                title: 'Whatsapp',
                user_name: shop?.social_media?.whatsapp!,
                editable: false,
            },
        ])
    }
    
    return {
        shop,
        cardData,
        onChangeInput,
        onLoadCardData,
        onEditModeInput,
    }
}