import { ProductItemEntity } from "@/shop/domain/entities"
import { useQueryClient } from "@tanstack/react-query"
import React from "react"
import { Navigate, useParams } from "react-router-dom"

export const ProductOverViewHelper = () => {
    const [product, setProduct]=React.useState<ProductItemEntity | null>(null)
    const { id: product_id } = useParams()

    const queryClient =  useQueryClient()
    const products : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])

    React.useEffect(() => {
        const find_product = products?.find((item) => item?.product?.id === product_id);
        if(find_product){
            setProduct(find_product as ProductItemEntity)
            return
        }    
        Navigate({ to: '/' })        
    }, [])

    return {
        product
    }
}