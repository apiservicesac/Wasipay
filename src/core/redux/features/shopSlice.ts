import { ShopEntity } from "@/features/shop/domain/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  shops: [],
  shop_profile: null,
};

export const shop_slice = createSlice({
  name: "shop_slice",
  initialState,
  reducers: {
    setShops: (state, action: PayloadAction<ShopEntity[]>) => {
      state.shops = action.payload.filter((shop : ShopEntity) => shop.id !== import.meta.env.VITE_SHOP_ID)
      state.shop_profile = action.payload.find((shop : ShopEntity) => shop.id === import.meta.env.VITE_SHOP_ID)
    },
    resetShops: (state) => {
      state.shops = []
    },
  },
});


export const {
  setShops,
  resetShops,
} = shop_slice.actions;

export default shop_slice.reducer;