import { ProductEntity } from "@/shop/domain/entities";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type ProductSlice = {
  products?: ProductEntity[] | null;    
};

const initialState: ProductSlice = {
  products: null,
};

// export const getAllProducts = createAsyncThunk(
//   "product_slice/getAllProducts",
//   async () => {
//     try {      
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/product/get-all/${import.meta.env.VITE_SHOP_ID}`);
//       return data.data
//     } catch (error) {
//       console.error("Error fetching:", error);
//       return null;
//     }
//   },
// )

export const product_slice = createSlice({
  name: "product_slice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },  
  // extraReducers: (builder) => {
  //   builder.addCase(getAllProducts.fulfilled, (state: ProductSlice, action: PayloadAction<ProductEntity | null>) => {
  //     if(action.payload){
  //       state.products = action.payload?
  //     }
  //   })
  // },
});


export const {
  setProducts,
} = product_slice.actions;

export default product_slice.reducer;