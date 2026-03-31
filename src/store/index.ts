import createAppStore from './createStore';
import rootSaga from './rootSaga';

const { store, sagaMiddleware } = createAppStore();

sagaMiddleware.run(rootSaga);

export default store;
