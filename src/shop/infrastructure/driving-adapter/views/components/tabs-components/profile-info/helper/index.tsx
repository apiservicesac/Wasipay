import { ShopEntity } from "@/shop/domain/entities";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

export const ShopProfileTabHelper = () => {

    const queryClient =  useQueryClient()

    const shop : ShopEntity | undefined = queryClient.getQueryData(['shop_profile'])

    const [formData, setFormData] = React.useState({
        name: "",
        description: "",
        phone: "",
        email: "",
        address: "",
        city: "",
    });    

    const handleChange = (e:any) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const UpdateStateFormData = () => {
        setFormData({
            name: shop?.name!,
            description: shop?.description!,
            phone: shop?.phone!,
            email: shop?.email!,
            address: shop?.address!,
            city: shop?.city!,
        })
    }



    return {
        formData, setFormData,
        handleChange,
        UpdateStateFormData,
    }
}