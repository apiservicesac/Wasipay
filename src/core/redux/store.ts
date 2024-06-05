import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/core/redux/features/cartSlice'

export const store = configureStore({
  reducer: {
    cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;