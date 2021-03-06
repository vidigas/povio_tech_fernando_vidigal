const INITIAL_STATE = {
	allUsers: [],
	loginInfo: null,
	signupInfo: null,
	updateInfo: null,
	newLikes: null,
	newUnlikes: null,
	userInfo: {
		token: null,
		username: null,
		likes: null,
	}
};


export default ( state = INITIAL_STATE, action ) => {
	switch (action.type ){
		case 'FETCH_USERS':
			return { ...state, allUsers: action.payload};
		case 'FETCH_USER':
			return { ...state, userInfo: action.payload};
		case 'LOGIN_USER':
			return { ...state, loginInfo: action.payload};
		case 'SIGNUP_USER': 
			return { ...state, signupInfo: action.payload};
		case 'UPDATE_USER':
			return { ...state, updateInfo: action.payload};
		case 'LIKE_USER': 
			return { ...state, newLikes: action.payload, newUnlikes: null };
		case 'UNLIKE_USER':
			return { ...state, newUnlikes: action.payload, newLikes: null };
		case 'LOGOUT_USER':
			return { ...state, userInfo: INITIAL_STATE.userInfo};
		
		default: return state;
	};

}
