import { useAppSelector } from "@/core/redux/hooks";
import { ShopEntity } from "@/features/shop/domain/entities";

export const ProfileInfoHelper = () => {
    
    const shops : ShopEntity[] = useAppSelector((state) => state.shopReducer.shops)
    const shop_profile : ShopEntity = useAppSelector((state) => state.shopReducer.shop_profile)
    
    return {
        shops,
        shop_profile,
    }
}