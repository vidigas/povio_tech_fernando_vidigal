import { getUsers, getMe, loginRequest, signupRequest, likeRequest } from '../repositories/repository';


export const fetchUsers =  () => async dispatch => {

	let response = await getUsers();
			
	dispatch({ type: 'FETCH_USERS', payload: response.data });
}
	
export const loginClick = (username, password) => async dispatch => {
	
	let response = await loginRequest(username, password);

	dispatch({ type: 'LOGIN_USER', payload: response.data });
}	

export const signupClick = (username, password) => async dispatch => {

	let response = await signupRequest(username, password);

	dispatch({ type: 'SIGNUP_USER', payload: response.data });
}

export const fetchUser = (token) => async dispatch => {
	let response = await getMe(token);

	response.data.token = token

	dispatch({ type: 'FETCH_USER', payload: response.data });
}


export const likeAction = (userId, token) => async dispatch => {
	
	let response = await likeRequest(userId, token);
	console.log('like response', response);

	dispatch({ type: 'LIKE_USER', payload: userId })

}