import { call, put, takeLatest } from 'redux-saga/effects';

import { GetProductsResponse } from '@interface/services/http/products/products.d';
import { getProducts } from '@interface/services/http/products/products.service';

import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from './duck';

function* fetchProductsWorker() {
  try {
    const response: GetProductsResponse = yield call(getProducts);
    yield put(fetchProductsSuccess(response.products));
  } catch (error) {
    yield put(fetchProductsFailure('Erro ao carregar produtos.'));
  }
}

export default function* productsSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProductsWorker);
}
