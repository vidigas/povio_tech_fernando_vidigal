const INITIAL_STATE = {
	allUsers: [],
	loginInfo: null,
	signupInfo: null,
	newLikes: null,
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
		case 'LIKE_USER':{
			
			return { ...state, newLikes: action.payload }
		}
		default: return state;
	};

}
