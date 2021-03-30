import { pending, fulfilled, rejected } from '../../../utils';
import { APPROVE_REQUEST } from '../../actions/actionType';

const initialState = {
	loading: false,
	status: '',
	data: '',
	error: '',
};

const approveRequestReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(APPROVE_REQUEST):
			return {
				...state,
				loading: true,
			};
		case fulfilled(APPROVE_REQUEST):
			return {
				...state,
				loading: false,
				status: action.payload.data.status,
				data: action.payload.data.data.updatedAt,
				error: '',
			};
		case rejected(APPROVE_REQUEST):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default approveRequestReducer;
