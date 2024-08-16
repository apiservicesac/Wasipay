import React from "react";
import { QueryUser } from "../react-query";
import { UseLocalContext } from "@/core/context/UseLocalContext";
import { useNavigate } from "react-router-dom";

const useUser = () => {
    const navigate = useNavigate();
    const { setStateUser } = UseLocalContext();
    const queryUser = new QueryUser();

    const init = React.useCallback(() => queryUser.init(setStateUser), [queryUser, setStateUser]);
    const login = React.useCallback((email: string, password: string) => queryUser.login(email, password), [queryUser]);
    const logout = React.useCallback(() => queryUser.logout(navigate), [queryUser, navigate]);

    return {
        init,
        login,
        logout
    };
};

export { useUser };