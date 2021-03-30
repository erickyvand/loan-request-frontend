import { pending, fulfilled, rejected } from '../../../utils';
import { GET_ALL_REQUESTS } from '../../actions/actionType';

const initialState = {
	loading: false,
	status: '',
	data: '',
	error: '',
};

const getAllRequestsReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(GET_ALL_REQUESTS):
			return {
				...state,
				loading: true,
			};
		case fulfilled(GET_ALL_REQUESTS):
			return {
				...state,
				loading: false,
				status: action.payload.data.status,
				data: action.payload.data.data,
				error: '',
			};
		case rejected(GET_ALL_REQUESTS):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default getAllRequestsReducer;
