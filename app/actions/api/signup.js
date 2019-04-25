import { signupRequest } from '../../repositories/repository.js';


export const signupClick = (username, password) => async dispatch => {

	let response = await signupRequest(username, password);

	dispatch({ type: 'SIGNUP_USER', payload: response.data });
}
