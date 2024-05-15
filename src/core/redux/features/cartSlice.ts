import { CartEntity, ProductCartEntity } from "@/shop/domain/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartEntity = {
  products: [],
  subtotal_price: 0,
  total_price: 0
};

export const cart_slice = createSlice({
  name: "cart_slice",
  initialState,
  reducers: {
    addProductCartStore: (state, action: PayloadAction<ProductCartEntity[]>) => {
      state.products = action.payload
    },
  },
});


export const {
  addProductCartStore,
} = cart_slice.actions;

export default cart_slice.reducer;