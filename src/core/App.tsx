import { useAppDispatch } from "@/core/redux/hooks";
import RouteIndex from "./routes";

import { ImplementationAxios as AxiosShop } from "@/shop/infrastructure/implementation/axios/shop";
import { ImplementationAxios as AxiosProduct } from "@/shop/infrastructure/implementation/axios/product";

import { GetByIdUseCase as ShopUseCaseGetById } from '@/shop/application/use_cases/shop'
import { GetAllUseCase as ProductUseCaseGetAll } from '@/shop/application/use_cases/product'

import { setShopProfile } from "@/shop/infrastructure/driving-adapter/redux/shopSlice";
import { setProducts } from "@/shop/infrastructure/driving-adapter/redux/productSlice";
import { useQuery } from "@tanstack/react-query";

function App() {

  const dispatch = useAppDispatch()
  const shop_id = `${import.meta.env.VITE_SHOP_ID}`

  
  // Loaded Data Shop Profile  
  const shopRepository = new AxiosShop()
  const shopUseCase = new ShopUseCaseGetById(shopRepository) 

  // Loaded Data Product Profile  
  const productRepository = new AxiosProduct()
  const productUseCase = new ProductUseCaseGetAll(productRepository)   

  const query_shop_profile = useQuery({ queryKey: ['shop_profile'], queryFn: () => shopUseCase.run(shop_id) })
  const query_product_list = useQuery({ queryKey: ['query_product_list'], queryFn: () => productUseCase.run(shop_id) })


  if(query_shop_profile.isSuccess && query_product_list.isSuccess) {
    dispatch(setShopProfile(query_shop_profile.data!))
    dispatch(setProducts(query_product_list.data!))
  }

  return (
    <RouteIndex />
  );  
}

export default App;
