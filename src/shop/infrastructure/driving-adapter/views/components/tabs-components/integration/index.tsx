import React from "react";

import { Cable } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { ShopEntity } from "@/shop/domain/entities";

interface LogoData {icon: string, style: string  }
interface CardData { id: number; logo: LogoData; title: string; user_name: string }

export const Integration = () => {

    const queryClient =  useQueryClient()

    const shop : ShopEntity | undefined = queryClient.getQueryData(['shop_profile'])

    const cardData: CardData[] = [
        {
            id: 1,
            logo: {
                icon: 'ri-tiktok-line',
                style: 'text-[#37C5BB] bg-[#C0F2EF]',
            },
            title: 'Tiktok',
            user_name: shop?.social_media?.tiktok!,
        },
        {
            id: 2,
            logo: {
                icon: 'ri-instagram-line',
                style: 'text-pink-500 bg-pink-100',
            },
            title: 'Instagram',
            user_name: shop?.social_media?.instagram!,
        },
        {
            id: 3,
            logo: {
                icon: 'ri-facebook-fill',
                style: 'text-sky-500 bg-sky-100',
            },
            title: 'Facebook',
            user_name: shop?.social_media?.facebook!,
        },
        {
            id: 4,
            logo: {
                icon: 'ri-youtube-line',
                style: 'text-red-500 bg-red-100',
            },
            title: 'Youtube',
            user_name: shop?.social_media?.youtube!,
        },
    ];

    return (
        <React.Fragment>
            <h6 className="mb-4 text-15">Connected Apps</h6>
            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 xl:grid-cols-4">
                {
                    (cardData || [])?.map((item: CardData, index: number) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <div className="flex gap-3 mb-5">
                                    <div className="grow size-6 text-2xl">
                                        <div className={`text-2xl flex items-center justify-center transition-all duration-200 ease-linear rounded size-9 ${item.logo.style}`}>                                                        
                                            <i className={item.logo.icon}></i>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <button type="button" className="px-2 py-1.5 text-xs bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                            <Cable className="inline-block size-3 ltr:mr-1 rtl:ml-1"></Cable>
                                            View Profile</button>
                                    </div>
                                </div>

                                <h6 className="mb-2 text-16">{item.title}</h6>
                                <p className="text-slate-500 dark:text-zink-200">{item.user_name}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </React.Fragment>
    );
}