import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QueryOrder } from "../react-query";
import { OrderEntity } from "@/features/order/domain/entities";

const useOrder = () => {
    const queryClient = useQueryClient()
    const queryOrder = new QueryOrder(queryClient);

    const init = React.useCallback(() => queryOrder.init(), [queryOrder]);
    const getAll = React.useCallback(() => queryOrder.getAll(), [queryOrder]);
    const create = React.useCallback((new_order: OrderEntity) => queryOrder.create(new_order), [queryOrder]);
    const countAmmountTotal = React.useCallback(() => queryOrder.countAmmountTotal(), [queryOrder])

    return {
        init,
        getAll,
        create,
        countAmmountTotal,
    };
};

export { useOrder };