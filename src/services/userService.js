import http from './httpService';

export const registerService = data => {
	return http.post('/auth/register', data);
};

export const loginService = data => {
	return http.post('/auth/login', data);
};
