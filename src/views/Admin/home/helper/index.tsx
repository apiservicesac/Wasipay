import { useAppSelector } from "@/core/redux/hooks";
import { useOrder } from "@/features/order/infrastructure/driving-adapter/hooks/useOrder";

export const HomeHelper = () => {
    const { getAll: getAllOrder, countAmmountTotal } = useOrder();    

    const products = useAppSelector((state) => state.productReducer.products)

    const orders = getAllOrder();
    const amount_orders_total = countAmmountTotal();

    return {
        products,
        orders,
        amount_orders_total,
    };
};
