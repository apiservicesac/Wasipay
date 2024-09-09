import { configureStore } from "@reduxjs/toolkit";
import productReducer from '@/core/redux/features/productSlice'
import shopReducer from '@/core/redux/features/shopSlice'

export const store = configureStore({
  reducer: {
    productReducer,
    shopReducer,
  },
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;