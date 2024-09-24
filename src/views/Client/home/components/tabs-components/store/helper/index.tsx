import React from "react";
import { useAppSelector } from "@/core/redux/hooks";
import { useNavigate } from "react-router-dom";

export const HelperStore = () => {

    const navigate = useNavigate()

    const [list, setList] = React.useState<boolean>(true);

    const product_reducer = useAppSelector((state) => state.productReducer)    

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

    return {
        list, setList,
        data: product_reducer.products,
        drawerEndToggle, drawerFilter,
        filterSearchData,
    }

}