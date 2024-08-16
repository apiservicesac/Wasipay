import { ShopEntity } from "@/features/shop/domain/entities";
import { useShop } from "@/features/shop/infrastructure/driving-adapter/hooks/useShop";
import React, { ChangeEvent } from "react";
import { toast } from "sonner";
import { CardData } from "..";

export const IntegrationTabHelper = () => {

    const { getShop, update_field } = useShop()

    const shop : ShopEntity | undefined = getShop()

    const [cardData, setCardData] = React.useState<CardData[]>([])
    

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
                            update_field('social_media', mappedData)
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