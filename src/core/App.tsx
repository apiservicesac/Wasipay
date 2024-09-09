import RouteIndex from "./routes";
import { Toaster } from 'sonner'
import { useUser } from "@/features/user/infrastructure/driving-adapter/hooks/useUser";
import React from "react";
import useFetchShops from "@/features/shop/infrastructure/driving-adapter/hooks/useFetchShops";

function App() {

  const [userLoaded, setUserLoaded] = React.useState<boolean>(true);

  const { init: initUser } = useUser()  

  useFetchShops()
  
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
