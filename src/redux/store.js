import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, {}, applyMiddleware(thunk, promise));

export default store;
