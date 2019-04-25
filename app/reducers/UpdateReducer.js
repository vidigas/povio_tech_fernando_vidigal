const INITIAL_STATE = {
	show: false,
};


export default ( state = INITIAL_STATE, action ) => {
	switch (action.type ){
		case 'OPEN_UPDATE_MODAL':
			return { ...state, show: true};
		case 'CLOSE_UPDATE_MODAL':
			return { ...state, show: false};
		default: return state;
	};

}
