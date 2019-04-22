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

const Modal = ({ classes, context, closeModal }) => {
  return (
  	<div className={classes.container}>
  		<div className={classes.backgroundDiv} onClick={closeModal} />
  		<div className={classes.formWrapper}>
  			<Form context={context} />
  		</div>
  	</div>
  );
}

// Button.propTypes = {
// 	onClick: propTypes.func.isRequired,
// 	label: propTypes.string,
// 	className: propTypes.string,
// 	type: propTypes.string
// };



export default injectSheet(style)(Modal);