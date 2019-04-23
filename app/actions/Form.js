	export const onUserChange = (payload) => {
		return {
			type: 'CHANGE_USERNAME',
			payload: payload.target.value
		};
	};


	export const onPasswordChange = (payload) => {
		return {
			type: 'CHANGE_PASSWORD',
			payload: payload.target.value
		};
	};
