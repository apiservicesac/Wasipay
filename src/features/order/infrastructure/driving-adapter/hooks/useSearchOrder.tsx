import React from "react";
import { useOrder } from "./useOrder";
import { OrderEntity } from "@/features/order/domain/entities";
import { useSearch } from "@/shared/hooks/useSearch";

export const useSearchOrder = () => {

    const { search } = useSearch();
    const { getAll } = useOrder();

    const orders_list = getAll();

    const [orders, setOrders] = React.useState<OrderEntity[]>([]);

    React.useEffect(()=> {
        setOrders(orders_list)
    }, [orders_list])

    const searchOrder = (event: any) => {
        const filtered = search(orders_list, event.target.value, ['order_code', 'customer.first_name', 'payment.payment_method.payment_method.name', 'status'])
        setOrders(filtered)
    }

    const searchOrderByStatus = (value: string) => {
        if (value === "all") {
            setOrders(orders_list)
            return
        }
        const filtered = search(orders_list, value, ['status'])
        setOrders(filtered)
    }

    return {
        orders,
        searchOrder,
        searchOrderByStatus,
    }
}