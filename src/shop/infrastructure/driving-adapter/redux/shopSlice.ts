import { ShopEntity } from "@/shop/domain/entities/Shop";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImplementationAxios } from "../../implementation/axios/shop";
import { GetByIdUseCase as UseCase} from '@/shop/application/use_cases/shop'

type ShopSlice = {
  profile?: ShopEntity | null;    
};

const initialState: ShopSlice = {
  profile: null,
};

// export const getShoProfile = createAsyncThunk(
//   "shop/getShoProfile",
//   async () => {
//     try {      

//     } catch (error) {
//       console.error("Error fetching:", error);
//       throw error;
//     }
//   },
// )

export const shop_slice = createSlice({
  name: "shop_slice",
  initialState,
  reducers: {
    setShopProfile: (state, action: PayloadAction<ShopEntity>) => {
      state.profile = action.payload;
    },
  },  
  // extraReducers: (builder) => {
  //   builder.addCase(getShoProfile.fulfilled, (state: ShopSlice, action: PayloadAction<ShopEntity | null>) => {
  //     state.profile = action.payload
  //   })
  // },
});


export const {
  setShopProfile,
} = shop_slice.actions;

export default shop_slice.reducer;