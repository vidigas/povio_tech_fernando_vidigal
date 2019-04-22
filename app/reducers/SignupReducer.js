const INITIAL_STATE = {
	show: false,
};


export default ( state = INITIAL_STATE, action ) => {
	switch (action.type ){
		case 'OPEN_SIGNUP_MODAL':
			return { ...state, show: true};
		case 'CLOSE_SIGNUP_MODAL':
			return { ...state, show: false};
		default: return state;
	};

}
