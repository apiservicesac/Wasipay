import { useAppDispatch } from "@/redux/hooks";
import RouteIndex from "./routes";
import { fetchShopProfile } from "@/redux/features/shopSlice";
import React from "react";
import { getAllProducts } from "@/redux/features/productSlice";

function App() {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchShopProfile())
    dispatch(getAllProducts())
  }, []);

  return (
    <RouteIndex />
  );
}

export default App;
