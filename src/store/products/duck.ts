import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Product } from '@interface/services/http/products/products.d';

type ProductsPayload = PayloadAction<Product[]>;
type ErrorPayload = PayloadAction<string>;

export interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: ProductsPayload) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchProductsFailure(state, action: ErrorPayload) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;
