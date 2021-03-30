import {
	getRequestService,
	requestService,
	getAllRequestsService,
	approveRequestService,
	rejectRequestService,
	getApprovedRequestsService,
} from '../../services/requestService';
import {
	APPROVE_REQUEST,
	GET_ALL_REQUESTS,
	GET_REQUEST,
	REQUEST,
	REJECT_REQUEST,
	GET_APPROVED_REQUEST,
} from './actionType';

export const getRequestAction = requestId => {
	return {
		type: GET_REQUEST,
		payload: getRequestService(requestId),
	};
};

export const requestAction = data => {
	return {
		type: REQUEST,
		payload: requestService(data),
	};
};

export const getAllRequestAction = () => {
	return {
		type: GET_ALL_REQUESTS,
		payload: getAllRequestsService(),
	};
};

export const approveRequestAction = requestId => {
	return {
		type: APPROVE_REQUEST,
		payload: approveRequestService(requestId),
	};
};

export const rejectRequestAction = requestId => {
	return {
		type: REJECT_REQUEST,
		payload: rejectRequestService(requestId),
	};
};

export const getApprovedRequestAction = () => {
	return {
		type: GET_APPROVED_REQUEST,
		payload: getApprovedRequestsService()
	}
}
