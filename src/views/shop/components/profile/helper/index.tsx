import { useAppSelector } from "@/core/redux/hooks";
import { ShopEntity } from "@/features/shop/domain/entities";
import { useParams } from "react-router-dom";


export const ProfileInfoHelper = () => {
    const { id } = useParams()
    
    const shops = useAppSelector((state) => state.shopReducer.shops)
    const shop_profile = shops.find((shop: ShopEntity) => shop.id === id)

    const products = useAppSelector((state) => state.productReducer.total)


    return {
        products,
        shop_profile
    }
}