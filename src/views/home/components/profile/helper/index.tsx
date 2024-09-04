import { ProductEntity } from "@/features/product/domain/entities";
import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";


export const ProfileInfoHelper = () => {

    // const shopRepository = new AxiosShop()
    // const { getShop } = useShop();
    const { getAll: getAllProduct } = useProduct();
    
    // const query_shop_profile : ShopEntity = getShop()
    const query_product_list : ProductEntity[] = getAllProduct()


    return {
        // query_shop_profile,
        query_product_list,
    }
}