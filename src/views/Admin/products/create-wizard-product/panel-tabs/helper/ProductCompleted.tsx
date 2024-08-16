import { UseLocalContext } from "@/core/context/UseLocalContext"
import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";
import { useNavigate } from "react-router-dom";

export const ProductCompletedHelper = () => {

    const navigate = useNavigate()
    const { productCreate } = UseLocalContext()
    const { create } = useProduct()

    const onSubmitCompleted = async () => {
        const { images, ...product_data } = productCreate!!
        await create(images, product_data);
        navigate("/dashboard/product")
    }

    return {
        productCreate,
        onSubmitCompleted
    }
}