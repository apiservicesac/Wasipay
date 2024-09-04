import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QueryProduct } from "../react-query";

const useProduct = () => {
    const queryClient = useQueryClient()
    const queryProduct = new QueryProduct(queryClient);

    const init = React.useCallback(() => queryProduct.init(), [queryProduct]);
    const getAll = React.useCallback(() => queryProduct.getAll(), [queryProduct]);
    const getById = React.useCallback((product_id: string) => queryProduct.getById(product_id), [queryProduct]);

    return {
        init,
        getAll,
        getById,
    };
};

export { useProduct };