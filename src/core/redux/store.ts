import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/core/redux/features/cartSlice'
import productReducer from '@/core/redux/features/productSlice'

export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
  },  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;