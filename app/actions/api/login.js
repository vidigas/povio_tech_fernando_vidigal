import { loginRequest } from '../../repositories/repository';

export const loginClick = (username, password) => async dispatch => {
	
	let response = await loginRequest(username, password);

	dispatch({ type: 'LOGIN_USER', payload: response.data });
}	
