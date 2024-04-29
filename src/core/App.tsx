import { useAppDispatch } from "@/redux/hooks";
import RouteIndex from "./routes";
import { fetchAll } from "@/redux/features/shopSlice";
import React from "react";

function App() {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAll())
  }, []);

  return (
    <RouteIndex />
  );
}

export default App;
