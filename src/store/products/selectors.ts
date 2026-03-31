import { createSelector } from 'reselect';

import { RootState } from '@interface/store/rootReducer';

import { ProductsState } from './duck';

const selectProductsState = (state: RootState): ProductsState => state.products;

export const getProducts = createSelector(selectProductsState, products => products.items);

export const getIsLoading = createSelector(selectProductsState, products => products.isLoading);

export const getError = createSelector(selectProductsState, products => products.error);
