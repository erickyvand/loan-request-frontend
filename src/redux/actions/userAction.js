import { loginService, registerService } from '../../services/userService';
import { LOGIN, REGISTER } from './actionType';

export const registerAction = data => {
	return {
		type: REGISTER,
		payload: registerService(data),
	};
};

export const loginAction = data => {
	return {
		type: LOGIN,
		payload: loginService(data),
	};
};
