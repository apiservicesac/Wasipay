import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";
import { ProductEntity } from "@/features/product/domain/entities";
// import filterDataBySearch from "@/shop/infrastructure/driving-adapter/dashboard/views/utils/filterDataBySearch";
import React from "react";

export const HelperStore = () => {
    const [list, setList] = React.useState<boolean>(true);
    const { getAll } = useProduct()
    const products : ProductEntity[] = getAll()
    const [data, setData] = React.useState<ProductEntity[]>(products  as ProductEntity[])

    const [drawerFilter, setDrawerFilter] = React.useState<boolean>(false);
    const drawerEndToggle = () => setDrawerFilter(!drawerFilter);

    const filterSearchData = (_: any) => {
        // const search = e.target.value;
        // const keysToSearch = ['product.name'];
        // filterDataBySearch(products as ProductEntity[], search, keysToSearch, setData);
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