import { all } from 'redux-saga/effects';

import { productsSaga } from '@interface/store/products';
import { productsRegisterSaga } from '@interface/store/products-register';

export default function* rootSaga() {
  yield all([productsSaga(), productsRegisterSaga()]);
}
