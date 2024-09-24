import React from "react";
import { QueryProduct } from "../react-query";
import { ProductEntity } from "@/features/product/domain/entities";
import { useAppSelector } from "@/core/redux/hooks";

const useProduct = () => {
    const productSlice = useAppSelector((state) => state.productReducer)
    const queryProduct = new QueryProduct(productSlice);
    
    const getById = React.useCallback((product_id: string) => queryProduct.getById(product_id), [queryProduct]);
    const nextCodeProduct = React.useCallback(() => queryProduct.nextCodeProduct(), [queryProduct]);
    const create = React.useCallback((images: any[], product_data: ProductEntity) => queryProduct.create(images, product_data), [queryProduct]);

    return {        
        getById,
        nextCodeProduct,
        create
    };
};

export { useProduct };