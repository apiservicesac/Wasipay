import { ShopEntity } from "@/shop/entities/Shop";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type ShopSlice = {
  shop?: ShopEntity | null;    
};

const initialState: ShopSlice = {
  shop: null,
};

export const fetchAll = createAsyncThunk(
  "shop/fetchShopProfile",
  async () => {
    try {      
      const { data } = await axios.get(`http://37.60.239.85:3095/api/v1/shop/get-all`);
      return data.data[0]
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
      state.shop = action.payload;
    },
  },  
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state: ShopSlice, action: PayloadAction<ShopEntity | null>) => {
      state.shop = action.payload
    })
  },
});


export const {
  setShopProfile,
} = shop_slice.actions;

export default shop_slice.reducer;