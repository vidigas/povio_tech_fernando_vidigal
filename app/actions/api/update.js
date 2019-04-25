import { updateRequest } from '../../repositories/repository.js';


export const updateClick = (token, password) => async dispatch => {
	 let response = await updateRequest(token, password);

	dispatch({ type: 'UPDATE_USER', payload: response.data });
}	
	
