import { pending, fulfilled, rejected } from '../../../utils';
import { REJECT_REQUEST } from '../../actions/actionType';

const initialState = {
	loading: false,
	status: '',
	data: '',
	error: '',
};

const rejectRequestReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(REJECT_REQUEST):
			return {
				...state,
				loading: true,
			};
		case fulfilled(REJECT_REQUEST):
			return {
				...state,
				loading: false,
				status: action.payload.data.status,
				data: action.payload.data.data.updatedAt,
				error: '',
			};
		case rejected(REJECT_REQUEST):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default rejectRequestReducer;
