import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";
import { ProductItemEntity } from "@/features/product/domain/entities";
// import filterDataBySearch from "@/shop/infrastructure/driving-adapter/dashboard/views/utils/filterDataBySearch";
import React from "react";

export const HelperStore = () => {
    const [list, setList] = React.useState<boolean>(true);
    const { getAll } = useProduct()
    const products : ProductItemEntity[] = getAll()
    const [data, setData] = React.useState<ProductItemEntity[]>(products  as ProductItemEntity[])

    const [drawerFilter, setDrawerFilter] = React.useState<boolean>(false);
    const drawerEndToggle = () => setDrawerFilter(!drawerFilter);

    const filterSearchData = (e: any) => {
        // const search = e.target.value;
        // const keysToSearch = ['product.name'];
        // filterDataBySearch(products as ProductItemEntity[], search, keysToSearch, setData);
    };   

    React.useEffect(() => {
        setData(products)
    }, [products])

    return {
        products,
        list, setList,
        data, setData,
        drawerEndToggle, drawerFilter,
        filterSearchData,
    }

}