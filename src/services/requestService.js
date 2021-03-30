import http from './httpService';

export const getRequestService = requestId => {
	return http.get(`tin-number/${requestId}`);
};

export const requestService = data => {
	return http.post('/loan', data);
};

export const getAllRequestsService = () => {
	return http.get('/loan');
};

export const getApprovedRequestsService = () => {
	return http.get('/loan/approved');
};

export const approveRequestService = requestId => {
	return http.patch(`/loan/${requestId}/approve`);
};

export const rejectRequestService = requestId => {
	return http.patch(`/loan/${requestId}/reject`);
};
