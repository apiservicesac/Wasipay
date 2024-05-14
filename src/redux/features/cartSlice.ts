import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type CartSlice = {
  products?: any[] | null;    
};

const initialState: CartSlice = {
  products: null,
};

export const cart_slice = createSlice({
  name: "cart_slice",
  initialState,
  reducers: {
    addProductCart: (state, action: PayloadAction<any>) => {
      state.products = state.products ? [...state.products, action.payload] : [action.payload];
    },
  },
});


export const {
    addProductCart,
} = cart_slice.actions;

export default cart_slice.reducer;