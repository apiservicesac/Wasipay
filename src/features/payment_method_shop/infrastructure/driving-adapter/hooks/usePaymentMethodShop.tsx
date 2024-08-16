import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { QueryPaymentMethodShop } from "../react-query";

const usePaymentMethodShop = () => {
    const queryClient = useQueryClient()
    const queryProduct = new QueryPaymentMethodShop(queryClient);

    const created = React.useCallback((formData: FormData) => queryProduct.created(formData), [queryProduct]);
    const updated = React.useCallback((id: string, formData: FormData) => queryProduct.updated(id, formData), [queryProduct]);
    const deleted = React.useCallback((id: string) => queryProduct.deleted(id), [queryProduct]);

    return {
        created,
        updated,
        deleted,
    };
};

export { usePaymentMethodShop };