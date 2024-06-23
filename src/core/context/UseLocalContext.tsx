import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext({});

export const UseLocalContextProvider = ({ children }: {children: any}) => {
    const [stateText, setStateText] = useState(null)
    return (
        <LocalStateContext.Provider
            value={{
                stateText, setStateText
            }}
        >
            {children}
        </LocalStateContext.Provider>
  )
}

export const UseLocalContext = () => {
    return useContext(LocalStateContext);
  };
