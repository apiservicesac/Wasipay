import React from "react";
import { QueryProduct } from "../react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@/core/redux/hooks";

const useProduct = () => {

    const product_reducer = useAppSelector((state) => state.productReducer)

    const queryClient = useQueryClient()
    const queryProduct = new QueryProduct(queryClient);
    const getAll = React.useCallback(() => queryProduct.getAll(), [queryProduct]);
    const getById = React.useCallback((product_id: string) => queryProduct.getById(product_id), [queryProduct]);



    return {        
        getAll,
        getById,
    };
};

export { useProduct };
