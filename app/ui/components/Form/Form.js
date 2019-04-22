import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
import FormSchema from './FormSchema';

const renderFields = (fieldsObj) => {
	return Object.keys(fieldsObj).map( fieldName => {
		return <TextInput label={fieldName} />;
	});
}

const renderButtons = (buttonsObj) => {
	return Object.keys(buttonsObj).map( buttonName => {
		return <Button label={buttonName} />;
	});

}


const FormBuilder = ({ classes, context, FieldsHandler, ButtonsHandler }) => {
	
	var form_schema = FormSchema(context)
	let fieldsObj = form_schema.fields;
	let buttonsObj = form_schema.buttons;
	return (
		[ <h1> { form_schema.title } </h1>,
		renderFields(fieldsObj, FieldsHandler),
		renderButtons(buttonsObj, ButtonsHandler)
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