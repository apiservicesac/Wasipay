import { useAppDispatch } from "@/redux/hooks";
import RouteIndex from "./routes";
import { fetchShopProfile } from "@/redux/features/shopSlice";
import React from "react";

function App() {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchShopProfile())
  }, []);

  return (
    <RouteIndex />
  );
}

export default App;
