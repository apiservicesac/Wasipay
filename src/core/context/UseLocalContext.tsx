import { ProductEntity } from "@/shop/domain/entities";
import { createContext, useContext, useState, ReactNode } from "react";

interface LocalStateContextType {
    productCreate: ProductEntity | null;
    setStateProduct: (product: ProductEntity | null) => void;
}

const LocalStateContext = createContext<LocalStateContextType | undefined>(undefined);

export const UseLocalContextProvider = ({ children }: {children: ReactNode}) => {
    const [productCreate, setStateProduct] = useState<ProductEntity | null>(null);
    return (
        <LocalStateContext.Provider value={{ productCreate, setStateProduct }}>
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
