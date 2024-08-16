import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QueryProduct } from "../react-query";
import { ProductEntity } from "@/features/product/domain/entities";

const useProduct = () => {
    const queryClient = useQueryClient()
    const queryProduct = new QueryProduct(queryClient);

    const init = React.useCallback(() => queryProduct.init(), [queryProduct]);
    const getAll = React.useCallback(() => queryProduct.getAll(), [queryProduct]);
    const getById = React.useCallback((product_id: string) => queryProduct.getById(product_id), [queryProduct]);
    const nextCodeProduct = React.useCallback(() => queryProduct.nextCodeProduct(), [queryProduct]);
    const create = React.useCallback((images: any[], product_data: ProductEntity) => queryProduct.create(images, product_data), [queryProduct]);

    return {
        init,
        getAll,
        getById,
        nextCodeProduct,
        create
    };
};

export { useProduct };