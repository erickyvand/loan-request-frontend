import { pending, fulfilled, rejected } from '../../../utils';
import { GET_APPROVED_REQUEST } from '../../actions/actionType';

const initialState = {
	loading: false,
	status: '',
	data: '',
	error: '',
};

const getApprovedRequestReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(GET_APPROVED_REQUEST):
			return {
				...state,
				loading: true,
			};
		case fulfilled(GET_APPROVED_REQUEST):
			return {
				...state,
				loading: false,
				status: action.payload.data.status,
				data: action.payload.data.data,
				error: '',
			};
		case rejected(GET_APPROVED_REQUEST):
			return {
				...state,
				loading: false,
				error: action.payload.response.data.message,
			};
		default:
			return state;
	}
};

export default getApprovedRequestReducer;
