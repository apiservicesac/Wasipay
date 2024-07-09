import { useQueryClient } from "@tanstack/react-query";
import { ProductAdapter } from "../../driven-adapter/react-query/Product";
import React from "react";
import { ProductEntity } from "@/shop/domain/entities";

const useProduct = () => {
    const queryClient = useQueryClient();
    const productAdapter = new ProductAdapter(queryClient);

    const getAll = React.useCallback(() => productAdapter.getAll(), [productAdapter]);
    const getById = React.useCallback((id: string) => productAdapter.getById(id), [productAdapter]);
    const create = React.useCallback((data: ProductEntity) => productAdapter.create(data), [productAdapter]);
    const update = React.useCallback((product_id: string, data: ProductEntity) => productAdapter.update(product_id, data), [productAdapter]);
    const update_field = React.useCallback((product_id: string, field: string, value: any) => productAdapter.update_field(product_id, field, value), [productAdapter]);
    const deleteProduct = React.useCallback((id: string) => productAdapter.delete(id), [productAdapter]);

    return {
        getAll,
        getById,
        create,
        update,
        update_field,
        delete: deleteProduct
    };
};

export { useProduct };