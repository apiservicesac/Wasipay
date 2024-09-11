import { ProductResponse } from "@/features/product/domain/repositories/Response";
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
    setProducts: (state, action: PayloadAction<ProductResponse>) => {
      state.products = action.payload.products;
      state.page = action.payload.currentPage;
      state.total = action.payload.total;
      state.totalPages = action.payload.totalPages;
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
    setProducts,
    resetProducts,
    setPage,
    setSortBy,
} = product_slice.actions;

export default product_slice.reducer;