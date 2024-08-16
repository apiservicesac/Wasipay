import React from "react";
import { QueryAddress } from "../react-query";

const useAddress = () => {
    const queryOrder = new QueryAddress();

    const create = React.useCallback((values: any) => queryOrder.create(values), [queryOrder]);

    return {
        create
    };
};

export { useAddress };