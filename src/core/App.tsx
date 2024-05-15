import { useAppDispatch } from "@/core/redux/hooks";
import RouteIndex from "./routes";
import React from "react";
import { ImplementationAxios as AxiosShop } from "@/shop/infrastructure/implementation/axios/shop";
import { ImplementationAxios as AxiosProduct } from "@/shop/infrastructure/implementation/axios/product";

import { GetByIdUseCase as ShopUseCaseGetById } from '@/shop/application/use_cases/shop'
import { GetAllUseCase as ProductUseCaseGetAll } from '@/shop/application/use_cases/product'

import { setShopProfile } from "@/shop/infrastructure/driving-adapter/redux/shopSlice";
import { setProducts } from "@/shop/infrastructure/driving-adapter/redux/productSlice";

const LoadedData = async (dispatch:any) => {

  const shop_id = `${import.meta.env.VITE_SHOP_ID}`

  
  // Loaded Data Shop Profile  
  const shopRepository = new AxiosShop()
  const shopUseCase = new ShopUseCaseGetById(shopRepository) 
  const shop_response = await shopUseCase.run(shop_id)
  dispatch(setShopProfile(shop_response!))

    // Loaded Data Product Profile  
    const productRepository = new AxiosProduct()
    const productUseCase = new ProductUseCaseGetAll(productRepository) 
    const product_response = await productUseCase.run(shop_id)
    dispatch(setProducts(product_response!))

}

function App() {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    LoadedData(dispatch)
  }, []);

  return (
    <RouteIndex />
  );
}

export default App;
