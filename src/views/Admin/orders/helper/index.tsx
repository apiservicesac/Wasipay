import { OrderEntity } from "@/features/order/domain/entities";
import { useOrder } from "@/features/order/infrastructure/driving-adapter/hooks/useOrder";
import React from "react";

export const OrderViewHelper = () => {

    const { getAll: getAllOrder, search } = useOrder();

    const [filteredOrders, setFilteredOrders] = React.useState<OrderEntity[]>([]);
    const searchOrders = (e: any) => {
        const data = search(e.target.value);
        setFilteredOrders(data as OrderEntity[])
    };
    
    return {
        filteredOrders,
        searchOrders
    }
}