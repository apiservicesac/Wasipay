import { ShopEntity } from "@/shop/entities/Shop";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type ShopSlice = {
  profile?: ShopEntity | null;    
};

const initialState: ShopSlice = {
  profile: null,
};

export const fetchShopProfile = createAsyncThunk(
  "shop/fetchShopProfile",
  async () => {
    try {      
      const { data } = await axios.get(`http://37.60.239.85:3095/api/v1/shop/get-by-id/${import.meta.env.VITE_SHOP_ID}`);
      return data.data
    } catch (error) {
      console.error("Error fetching:", error);
      throw error;
    }
  },
)

export const shop_slice = createSlice({
  name: "shop_slice",
  initialState,
  reducers: {
    setShopProfile: (state, action: PayloadAction<ShopEntity>) => {
      state.profile = action.payload;
    },
  },  
  extraReducers: (builder) => {
    builder.addCase(fetchShopProfile.fulfilled, (state: ShopSlice, action: PayloadAction<ShopEntity | null>) => {
      state.profile = action.payload
    })
  },
});


export const {
  setShopProfile,
} = shop_slice.actions;

export default shop_slice.reducer;