import { ProductEntity } from "@/features/product/domain/entities";
import React from "react";
import filterDataBySearch from "@/common/utils/filterDataBySearch";
import { useAppSelector } from "@/core/redux/hooks";

export const HelperStore = () => {
    const [list, setList] = React.useState<boolean>(true);

    const product_reducer = useAppSelector((state) => state.productReducer)

    const [data, setData] = React.useState<ProductEntity[]>([])

    const [drawerFilter, setDrawerFilter] = React.useState<boolean>(false);

    const drawerEndToggle = () => setDrawerFilter(!drawerFilter);

    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['title'];
        filterDataBySearch(product_reducer.products as ProductEntity[], search, keysToSearch, setData);
    };

    React.useEffect(() => {
        setData(product_reducer.products)
    }, [product_reducer.products])
    

    return {
        list, setList,
        data, setData,
        drawerEndToggle, drawerFilter,
        filterSearchData,
    }

}