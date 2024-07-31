import { ProductItemEntity } from "@/shop/domain/entities";
import filterDataBySearch from "@/shop/infrastructure/driving-adapter/dashboard/views/utils/filterDataBySearch";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

export const HelperStore = () => {
    const [list, setList] = React.useState<boolean>(true);
    const queryClient =  useQueryClient()
    const products : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])

    const [data, setData] = React.useState<ProductItemEntity[]>(products  as ProductItemEntity[])

    const [drawerFilter, setDrawerFilter] = React.useState<boolean>(false);
    const drawerEndToggle = () => setDrawerFilter(!drawerFilter);

    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['product.name'];
        filterDataBySearch(products as ProductItemEntity[], search, keysToSearch, setData);
    };   

    return {
        list, setList,
        data, setData,
        drawerEndToggle, drawerFilter,
        filterSearchData,
    }

}