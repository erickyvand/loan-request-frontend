import { combineReducers } from 'redux';
import loginReducer from './reducers/auth/loginReducer';
import registerReducer from './reducers/auth/registerReducer';

const rootReducer = combineReducers({
	register: registerReducer,
	login: loginReducer,
});

export default rootReducer;
