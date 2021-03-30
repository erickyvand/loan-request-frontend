import { pending, fulfilled, rejected } from '../../../utils';
import { REGISTER } from '../../actions/actionType';

const initialState = {
	loading: false,
	status: '',
	error: '',
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(REGISTER):
			return {
				...state,
				loading: true,
			};
		case fulfilled(REGISTER):
			return {
				...state,
				loading: false,
				status: action.payload.data.status,
			};
		case rejected(REGISTER):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default registerReducer;
