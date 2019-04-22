const login_form_schema = {
	title: 'LOGIN',
	fields : {
		username : {
			placeholder: 'username',
			type: 'text'
		},
		password: {
			placeholder: 'password',
			type: 'password'
		}
	},
	buttons: {
		button_send: {
			title: 'login'
		},
		button_link: {
			title: 'notRegistered'
		}
	}
}

const signup_form_schema = {
	title: 'SIGNUP',
	fields : {
		username : {
			placeholder: 'username',
			type: 'text'
		},
		password: {
			placeholder: 'password',
			type: 'password'
		}
	},
	buttons: {
		button_send: {
			title: 'register'
		},
		button_link: {
			title: 'login'
		}
	}
}

const update_form_schema = {
	title: 'UPDATE PASSWORD',
	fields : {
		username : {
			placeholder: 'username',
			type: 'text'
		},
		oldPassword: {
			placeholder: 'old password',
			type: 'password'
		},
		newPassword: {
			placeholder: 'new password',
			type: 'password'
		}
	},
	buttons: {
		button_send: {
			title: 'update'
		}
	}
}

const FormSchema = (form_name) => {
	switch(form_name){
		case 'login': return login_form_schema;
		case 'signup': return signup_form_schema;
		case 'update': return update_form_schema;
		default: return;
	}
}

export default FormSchema;
