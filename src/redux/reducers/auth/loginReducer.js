import { pending, fulfilled, rejected } from '../../../utils';
import { LOGIN } from '../../actions/actionType';

const initialState = {
	loading: false,
	status: '',
	data: '',
	error: '',
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(LOGIN):
			return {
				...state,
				loading: true,
			};
		case fulfilled(LOGIN):
			return {
				...state,
				loading: false,
				status: action.payload.data.status,
				data: action.payload.data.data,
				error: '',
			};
		case rejected(LOGIN):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default loginReducer;
