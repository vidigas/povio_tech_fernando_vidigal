import { getUsers } from '../repositories/repository';


export const fetchUsers =  () => async dispatch => {

	let response = await getUsers();
			
	dispatch({ type: 'FETCH_USERS', payload: response.data });
}
		
