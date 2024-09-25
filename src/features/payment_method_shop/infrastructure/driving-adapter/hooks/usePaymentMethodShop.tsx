import React from "react";
import { QueryPaymentMethodShop } from "../react-query";
import { PaymentMethodShopEntity as Entity } from "@/features/payment_method_shop/domain/entities";

const usePaymentMethodShop = () => {
    const queryProduct = new QueryPaymentMethodShop();

    const created = React.useCallback((data: Entity) => queryProduct.created(data), [queryProduct]);
    const updated = React.useCallback((id: string, data: Entity) => queryProduct.updated(id, data), [queryProduct]);
    const deleted = React.useCallback((id: string) => queryProduct.deleted(id), [queryProduct]);

    return {
        created,
        updated,
        deleted,
    };
};

export { usePaymentMethodShop };