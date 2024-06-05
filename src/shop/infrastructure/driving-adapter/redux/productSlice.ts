import { ProductItemEntity } from "@/shop/domain/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductSlice = {
  products?: ProductItemEntity[];    
};

const initialState: ProductSlice = {
  products: [],
};

export const product_slice = createSlice({
  name: "product_slice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductItemEntity[]>) => {
      state.products = action.payload;
    },
  },
});


export const {
  setProducts,
} = product_slice.actions;

export default product_slice.reducer;