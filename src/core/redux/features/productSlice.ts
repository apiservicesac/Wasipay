import { ProductItemEntity } from "@/features/product/domain/entities";
import { ProductResponse } from "@/features/product/domain/entities/Response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
  page: 1,
  pageSize: 20,
  total: 0,
  totalPages: 0,
  label: 'Lowest Price',
  sortBy: 'price_offer',
  sortOrder: 'ASC'
};

export const product_slice = createSlice({
  name: "product_slice",
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<ProductResponse>) => {    
      state.page = action.payload.currentPage;
      state.total = action.payload.total;
      state.totalPages = action.payload.totalPages;
    },
    setProducts: (state, action: PayloadAction<ProductItemEntity[]>) => {      
      state.products = action.payload;      
    },
    resetProducts: (state) => {
      state.products = [];
      state.total = 0;
      state.page = 1;
      state.totalPages = 0;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSortBy: (state, action: PayloadAction<{label: string, sortBy: string, sortOrder: string}>) => {
      state.label = action.payload.label;
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
  },
});

export const {
    setPagination,
    setProducts,
    resetProducts,
    setPage,
    setSortBy,
} = product_slice.actions;

export default product_slice.reducer;