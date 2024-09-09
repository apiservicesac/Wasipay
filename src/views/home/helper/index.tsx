import React from "react";
import { ShopEntity } from "@/features/shop/domain/entities";
import { useShop } from "@/features/shop/infrastructure/driving-adapter/hooks/useShop";
import filterDataBySearch from "@/common/utils/filterDataBySearch";

export const HelperHome = () => {
    const [list, setList] = React.useState<boolean>(true);
    const { getShops } = useShop()
    const shops : ShopEntity[] = getShops()

    const [data, setData] = React.useState<ShopEntity[]>(shops  as ShopEntity[])

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['name'];
        filterDataBySearch(shops, search, keysToSearch, setData);
    };

    React.useEffect(() => {
        setData(shops)
    }, [shops])

    return {
        filterSearchData,
        shops,
        list, setList,
        data, setData,
    }

}