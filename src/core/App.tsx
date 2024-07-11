import React from "react";
import { OrderListHelper, ProductListHelper, ShopProfileHelper, UserProfileHelper } from "./helper";
import RouteIndex from "./routes";
import { Toaster } from 'sonner'

function App() {
  const [userLoaded, setUserLoaded] = React.useState<boolean>(true);

  const { getUserProfileData } = UserProfileHelper();
  ShopProfileHelper()
  ProductListHelper()
  OrderListHelper()

  React.useEffect(() => {            
    getUserProfileData()
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
