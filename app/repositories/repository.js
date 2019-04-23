import axios from 'axios';

export const getUsers = () => {
  return axios.get('/most-liked');
};

export const getMe = token => {
	return axios.get('/me', { headers : { Authorization : token }})
}


export const loginRequest = (username, password) => {
	let data = JSON.stringify({ username, password });
	return axios.post('/login', data, {
		headers: {
       'Content-Type': 'application/json',
    }
	});
};

export const signupRequest = ( username, password ) => {
	let data = JSON.stringify({ username, password });
	return axios.post('/signup', data, {
		headers: { 'Content-Type': 'application/json' }
	});
}

export const likeRequest = (userId, token) => {
	return axios.put(`/user/${userId}/like`, {}, { headers : { Authorization : token }});
}

export const unlikeRequest = ( userId, token) => {
	return axios.put(`/user/${userId}/unlike`, {}, { headers : { Authorization: token }});
}


export const updateRequest = (password, token) => {
	
	let data = JSON.stringify( { password });

	return axios.put(`/me/update-password`, { password },{ headers : { Authorization : token }});
}