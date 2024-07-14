import { ProductItemEntity } from "@/shop/domain/entities"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export const ProductOverViewHelper = () => {
    const { id: product_id } = useParams()

    const queryClient =  useQueryClient()
    const products : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])
    const product = products?.find((item) => item?.product?.id === product_id);


    return {
        product,
    }
}