import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "@/redux/features/shopSlice"

export const store = configureStore({
  reducer: {
    shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;