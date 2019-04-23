import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import signupReducer from './SignupReducer';
import usersReducer from './UsersReducer';
import formReducer from './FormReducer';

export default combineReducers ({
	login: loginReducer,
	signup: signupReducer,
	users: usersReducer,
	form: formReducer
	});

