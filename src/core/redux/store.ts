import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "@/shop/infrastructure/driving-adapter/redux/shopSlice"
import productReducer from "@/shop/infrastructure/driving-adapter/redux/productSlice"
import cartReducer from '@/core/redux/features/cartSlice'

export const store = configureStore({
  reducer: {
    shopReducer,
    productReducer,
    cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;