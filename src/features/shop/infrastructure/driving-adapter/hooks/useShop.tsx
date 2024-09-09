import React from "react";
import { QueryShop } from "../react-query";

const useShop = () => {
    const queryProduct = new QueryShop();

    const init = React.useCallback(() => queryProduct.init(), [queryProduct]);
    const getShop = React.useCallback(() => queryProduct.getShop(), [queryProduct]);
    const getAll = React.useCallback(() => queryProduct.getAll(), [queryProduct]);
    const getShops = React.useCallback(() => queryProduct.getShops(), [queryProduct]);
    const getByIdShop = React.useCallback((id: string) => queryProduct.getByIdShop(id), [queryProduct]);


    return {
        init,
        getShop,
        getAll,
        getShops,
        getByIdShop
    };
};

export { useShop };