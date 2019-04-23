const INITIAL_STATE = {
	username: '',
	password: ''
};


export default ( state = INITIAL_STATE, action ) => {

	switch (action.type ){
		case 'CHANGE_USERNAME':
			return { ...state, username: action.payload};
		case 'CHANGE_PASSWORD':
			return { ...state, password: action.payload};
		default: return state;
	};

}