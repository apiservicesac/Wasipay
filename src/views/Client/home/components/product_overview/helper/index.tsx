import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct"
import { useParams } from "react-router-dom"

export const ProductOverViewHelper = () => {
    const { id: product_id } = useParams()

    const { getById } = useProduct();
    const product = getById(product_id!);

    return {
        product,
    }
}