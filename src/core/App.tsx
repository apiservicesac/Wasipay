import RouteIndex from "./routes";
import { Toaster } from 'sonner'
import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";
import { useUser } from "@/features/user/infrastructure/driving-adapter/hooks/useUser";
import React from "react";

function App() {

  const [userLoaded, setUserLoaded] = React.useState<boolean>(true);


  const { init: initUser } = useUser()
  const { init : initProducts } = useProduct();
  
  initProducts()

  React.useEffect(() => {            
    initUser()
    .then(() => {
      setUserLoaded(false);
    }).catch(() => {
      setUserLoaded(false);
    })
  }, [])

  if (userLoaded) {
    return <div></div>;
  }

  
  return (
    <>
      <Toaster position="top-right"/>
      <RouteIndex />
    </>
  );  
}

export default App;
