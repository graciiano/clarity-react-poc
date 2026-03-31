import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RegisterSubmitPayload } from '@interface/services/http/products-register/products-register.d';

type RegisterRequestPayload = PayloadAction<RegisterSubmitPayload>;
type ErrorPayload = PayloadAction<string>;

export interface ProductsRegisterState {
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
}

const initialState: ProductsRegisterState = {
  isSubmitting: false,
  submitError: null,
  submitSuccess: false,
};

const productsRegisterSlice = createSlice({
  name: 'productsRegister',
  initialState,
  reducers: {
    submitRegisterRequest(state, _action: RegisterRequestPayload) {
      state.isSubmitting = true;
      state.submitError = null;
      state.submitSuccess = false;
    },
    submitRegisterSuccess(state) {
      state.isSubmitting = false;
      state.submitError = null;
      state.submitSuccess = true;
    },
    submitRegisterFailure(state, action: ErrorPayload) {
      state.isSubmitting = false;
      state.submitError = action.payload;
      state.submitSuccess = false;
    },
    resetRegisterState(state) {
      state.isSubmitting = false;
      state.submitError = null;
      state.submitSuccess = false;
    },
  },
});

export const { submitRegisterRequest, submitRegisterSuccess, submitRegisterFailure, resetRegisterState } =
  productsRegisterSlice.actions;

export default productsRegisterSlice.reducer;
