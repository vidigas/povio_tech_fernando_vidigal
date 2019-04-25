import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
import FormSchema from './FormSchema';

const renderFields = (fieldsObj, onPasswordChange, onUserChange) => {
	return Object.keys(fieldsObj).map( fieldName => {
		const onChange = fieldName === 'username' ? onUserChange : onPasswordChange; 
		return <TextInput type={fieldName === 'password' ? 'password' : 'text'} label={fieldName} onChange={onChange} key={fieldName}/>;
	});
}

const selectHandler = (handlers, title) => {
	switch(title){
		case 'login': {
			return 
		}
		default: return
	}
}

const renderButtons = (buttonsObj, onPrimaryButtonClick, onSecundaryButtonClick) => {
	return Object.keys(buttonsObj).map( buttonName => {

		const onClick = buttonName === 'button_send' ? onPrimaryButtonClick : onSecundaryButtonClick;
		return <Button label={buttonsObj[buttonName].title} onClick={onClick} key={buttonsObj[buttonName].title} />;
	});

}


const FormBuilder = ({ classes, context, onUserChange, onPasswordChange, onPrimaryButtonClick, onSecundaryButtonClick }) => {
	
	var form_schema = FormSchema(context)
	let fieldsObj = form_schema.fields;
	let buttonsObj = form_schema.buttons;
	return (
		[ <h1 key={'title'}> { form_schema.title } </h1>,
		renderFields(fieldsObj, onPasswordChange, onUserChange),
		renderButtons(buttonsObj, onPrimaryButtonClick, onSecundaryButtonClick)
		])
}


const style = {
	container: {
		backgroundColor: 'white',
		padding: '20px',
		marginTop: '20px'
	}
}

export default injectSheet(style)(FormBuilder);