import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Form from './Form';

const style = {
  container: {
  	display: ({ show }) => show ? 'block': 'none'
  },
  backgroundDiv: {
  		zIndex: '10',
  		position: 'fixed',
  		top: 0,
  		left: 0,
  		width: '144vw',
  		height: '144vh',
  		backgroundColor: 'rgba(228, 232, 227, 0.8)',
  },
  formWrapper: {
  	zIndex: '15',
  	position: 'fixed',
  	top: '25%',
  	left:'25%',
  	backgroundColor: 'white',
  	width: '650px',
  	heigth: '850px',
  	padding: '10px',
  	paddingLeft: '50px',
  }
};

const Modal = ({ classes, context, closeModal, onUserChange, onPasswordChange, onPrimaryButtonClick, onSecundaryButtonClick }) => {
  return (
  	<div className={classes.container}>
  		<div className={classes.backgroundDiv} onClick={closeModal} />
  		<div className={classes.formWrapper}>
  			<Form 
          context={context}
          onUserChange={onUserChange}
          onPasswordChange={onPasswordChange}
          onPrimaryButtonClick={onPrimaryButtonClick}
          onSecundaryButtonClick={onSecundaryButtonClick}
          />
  		</div>
  	</div>
  );
}


export default injectSheet(style)(Modal);