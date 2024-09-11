import { ProductEntity } from "@/features/product/domain/entities";
import React from "react";
import { useAppSelector } from "@/core/redux/hooks";
import { useNavigate } from "react-router-dom";

export const HelperStore = () => {

    const navigate = useNavigate()

    const [list, setList] = React.useState<boolean>(true);

    const product_reducer = useAppSelector((state) => state.productReducer)

    const [data, setData] = React.useState<ProductEntity[]>([])

    const [drawerFilter, setDrawerFilter] = React.useState<boolean>(false);

    const drawerEndToggle = () => setDrawerFilter(!drawerFilter);

    const filterSearchData = (e: any) => {
        const search = e.target.value;
        if(search.length >= 3) {
            navigate(`?page=1&sortby=${product_reducer.sortBy}&sortorder=${product_reducer.sortOrder}&search=${search}`)
            return
        }
        navigate(`?page=${product_reducer.page}&sortby=${product_reducer.sortBy}&sortorder=${product_reducer.sortOrder}`)
        return
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