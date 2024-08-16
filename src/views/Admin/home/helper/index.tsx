import { useOrder } from "@/features/order/infrastructure/driving-adapter/hooks/useOrder";
import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";

export const HomeHelper = () => {
    const { getAll: getAllOrder, countAmmountTotal } = useOrder();
    const { getAll: getAllProduct } = useProduct();

    const products = getAllProduct();
    const orders = getAllOrder();
    const amount_orders_total = countAmmountTotal();

    return {
        products,
        orders,
        amount_orders_total,
    };
};
