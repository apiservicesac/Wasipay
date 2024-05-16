import { ShopEntity } from "@/shop/domain/entities/Shop";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ShopSlice = {
  profile?: ShopEntity | null;    
};

const initialState: ShopSlice = {
  profile: null,
};

export const shop_slice = createSlice({
  name: "shop_slice",
  initialState,
  reducers: {
    setShopProfile: (state, action: PayloadAction<ShopEntity>) => {
      state.profile = action.payload;
    },
  },
});


export const {
  setShopProfile,
} = shop_slice.actions;

export default shop_slice.reducer;