import { likeRequest, unlikeRequest } from '../repositories/repository';


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