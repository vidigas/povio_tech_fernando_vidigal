import { loginRequest, signupRequest, likeRequest, unlikeRequest } from '../repositories/repository';



	
export const loginClick = (username, password) => async dispatch => {
	
	let response = await loginRequest(username, password);

	dispatch({ type: 'LOGIN_USER', payload: response.data });
}	

export const signupClick = (username, password) => async dispatch => {

	let response = await signupRequest(username, password);

	dispatch({ type: 'SIGNUP_USER', payload: response.data });
}



export const likeAction = (userId, token) => async dispatch => {
	
	let response = await likeRequest(userId, token);

	response.data.userId = userId;

	dispatch({ type: 'LIKE_USER', payload: response.data });

}

export const unlikeAction = (userId, token) => async dispatch => {
	let response = await unlikeRequest(userId, token);
	
	response.data.userId = userId;

	dispatch({ type: 'UNLIKE_USER', payload: response.data });
}

	export const logout = () => {
		return {
			type: 'LOGOUT_USER'
		}
	}