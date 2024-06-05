import { useAppDispatch } from "@/core/redux/hooks";
import RouteIndex from "./routes";

import { ImplementationAxios as AxiosProduct } from "@/shop/infrastructure/implementation/axios/product";
import { GetAllUseCase as ProductUseCaseGetAll } from '@/shop/application/use_cases/product'

import { setProducts } from "@/shop/infrastructure/driving-adapter/redux/productSlice";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function App() {

  const dispatch = useAppDispatch()
  const shop_id = `${import.meta.env.VITE_SHOP_ID}`

  
  // Loaded Data Product Profile  
  const productRepository = new AxiosProduct()
  const productUseCase = new ProductUseCaseGetAll(productRepository)   

  const query_product_list = useQuery({ queryKey: ['query_product_list'], queryFn: () => productUseCase.run(shop_id) })


React.useEffect(() => {
  if(query_product_list.isSuccess) {
    dispatch(setProducts(query_product_list.data!))
  }
}, [])

  return (
    <RouteIndex />
  );  
}

export default App;
