export {
  default as productsRegisterReducer,
  resetRegisterState,
  submitRegisterFailure,
  submitRegisterRequest,
  submitRegisterSuccess,
} from './duck';
export { default as productsRegisterSaga } from './saga';
export * from './selectors';
