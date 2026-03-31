import { createSelector } from 'reselect';

import { RootState } from '@interface/store/rootReducer';

import { ProductsRegisterState } from './duck';

const selectRegisterState = (state: RootState): ProductsRegisterState => state.productsRegister;

export const getIsSubmitting = createSelector(selectRegisterState, register => register.isSubmitting);

export const getSubmitError = createSelector(selectRegisterState, register => register.submitError);

export const getSubmitSuccess = createSelector(selectRegisterState, register => register.submitSuccess);
