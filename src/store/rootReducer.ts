import { combineReducers } from 'redux';

import { productsReducer } from '@interface/store/products';
import { productsRegisterReducer } from '@interface/store/products-register';

const rootReducer = combineReducers({
  products: productsReducer,
  productsRegister: productsRegisterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
