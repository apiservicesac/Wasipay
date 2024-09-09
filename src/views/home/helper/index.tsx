import React from "react";
import { ShopEntity } from "@/features/shop/domain/entities";
import filterDataBySearch from "@/common/utils/filterDataBySearch";
import { useAppSelector } from "@/core/redux/hooks";

export const HelperHome = () => {
    const [list, setList] = React.useState<boolean>(true);

    const shops : ShopEntity[] = useAppSelector((state) => state.shopReducer.shops)

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