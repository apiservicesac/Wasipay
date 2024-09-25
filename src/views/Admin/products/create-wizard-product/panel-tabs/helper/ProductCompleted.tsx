import { UseLocalContext } from "@/core/context/UseLocalContext"
import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProductCompletedHelper = () => {

    const { getById, create } = useProduct();
    const { id: product_id } = useParams()
    const edit_product = getById(product_id!)

    const navigate = useNavigate()
    const { productCreate, setStateProduct } = UseLocalContext()

    const onSubmitCompleted = async () => {
        const { images, ...product_data } = productCreate!!
        await create(images!, product_data);
        navigate("/dashboard/product")
    }

    React.useEffect(() => {
        if(edit_product) {
            setStateProduct(edit_product.product!)
        }
    }, [])

    return {
        productCreate,
        onSubmitCompleted
    }
}