import { pending, fulfilled, rejected } from '../../../utils';
import { REQUEST } from '../../actions/actionType';

const initialState = {
	loading: false,
	status: '',
	message: '',
	data: '',
	error: '',
};

const requestReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(REQUEST):
			return {
				...state,
				loading: true,
			};
		case fulfilled(REQUEST):
			return {
				...state,
				loading: false,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: action.payload.data.data,
				error: '',
			};
		case rejected(REQUEST):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default requestReducer;
