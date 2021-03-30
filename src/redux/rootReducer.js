import { combineReducers } from 'redux';
import loginReducer from './reducers/auth/loginReducer';
import registerReducer from './reducers/auth/registerReducer';
import getAllRequestsReducer from './reducers/requests/getAllRequestsRequest';
import getRequestReducer from './reducers/requests/getRequestReducer';
import requestReducer from './reducers/requests/requestReducer';
import approveRequestReducer from './reducers/requests/approveRequestReducer';
import rejectRequestReducer from './reducers/requests/rejectRequestReducer';
import getApprovedRequestReducer from './reducers/requests/getApproveRequestReducer';

const rootReducer = combineReducers({
	register: registerReducer,
	login: loginReducer,
	getRequest: getRequestReducer,
	request: requestReducer,
	getAllRequests: getAllRequestsReducer,
	approveRequest: approveRequestReducer,
	rejectRequest: rejectRequestReducer,
	getApproved: getApprovedRequestReducer,
});

export default rootReducer;
