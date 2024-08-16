import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QueryShop } from "../react-query";
import { ShopEntity } from "@/features/shop/domain/entities";

const useShop = () => {
    const queryClient = useQueryClient()
    const queryProduct = new QueryShop(queryClient);

    const init = React.useCallback(() => queryProduct.init(), [queryProduct]);
    const getShop = React.useCallback(() => queryProduct.getShop(), [queryProduct]);
    const update = React.useCallback((values: ShopEntity) => queryProduct.update(values), [queryProduct]);
    const update_field = React.useCallback((field: string, values: any) => queryProduct.update_field(field, values), [queryProduct]);

    return {
        init,
        getShop,
        update,
        update_field,
    };
};

export { useShop };