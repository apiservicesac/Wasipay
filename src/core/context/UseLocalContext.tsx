import { ProductEntity } from "@/features/product/domain/entities";
import { UserEntity } from "@/features/user/domain/entities";
import { createContext, useContext, useState, ReactNode } from "react";

interface LocalStateContextType {
    productCreate: ProductEntity | null;
    setStateProduct: (product: ProductEntity | null) => void;
    stateUser: UserEntity | null;
    setStateUser: (user: UserEntity | null) => void;
}

const LocalStateContext = createContext<LocalStateContextType | undefined>(undefined);

export const UseLocalContextProvider = ({ children }: {children: ReactNode}) => {
    const [stateUser, setStateUser] = useState<UserEntity | null>(null);
    const [productCreate, setStateProduct] = useState<ProductEntity | null>(null);

    return (
        <LocalStateContext.Provider value={{ productCreate, setStateProduct, stateUser, setStateUser }}>
            {children}
        </LocalStateContext.Provider>
    );
};

export const UseLocalContext = (): LocalStateContextType => {
    const context = useContext(LocalStateContext);
    if (context === undefined) {
        throw new Error("UseLocalContext must be used within a UseLocalContextProvider");
    }
    return context;
};
