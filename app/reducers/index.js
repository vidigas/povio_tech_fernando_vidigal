import { combineReducers } from 'redux';

import updateReducer from './UpdateReducer';
import loginReducer from './LoginReducer';
import signupReducer from './SignupReducer';
import usersReducer from './UsersReducer';
import formReducer from './FormReducer';

export default combineReducers ({
	update: updateReducer,
	login: loginReducer,
	signup: signupReducer,
	users: usersReducer,
	form: formReducer
	});

