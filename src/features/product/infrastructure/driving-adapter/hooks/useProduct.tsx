import React from "react";
import { QueryProduct } from "../react-query";
import { useQueryClient } from "@tanstack/react-query";

const useProduct = () => {

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
