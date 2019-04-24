import { getUsers, getMe } from '../repositories/repository';

export const fetchUsers =  () => async dispatch => {

	let response = await getUsers();
			
	dispatch({ type: 'FETCH_USERS', payload: response.data });
}


export const fetchUser = (token) => async dispatch => {
	let response = await getMe(token);

	response.data.token = token

	dispatch({ type: 'FETCH_USER', payload: response.data });
}