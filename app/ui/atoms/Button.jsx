import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

const buttonStyle = {
  button: {
      color: 'white',
      border: 'none',
      outline: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      backgroundColor:({ isLiked }) => isLiked ? '#ff8282': '#81D2AE',
      fontWeight: 'bold',
      borderRadius: '10px',
      minWidth: '30px',
      position: 'relative',
      top: '10px',
      height:'35px',
      margin: '15px'
  },
  dislike: {
      backgroundColor: 'red'
  }
};

const Button = ({ label, onClick, className, classes, type, key, isLiked }) => {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`} type={type} key={key}>
      {label}
    </button>
  );
}

Button.propTypes = {
	onClick: propTypes.func.isRequired,
	label: propTypes.string,
	className: propTypes.string,
	type: propTypes.string
};

Button.defaultProps = {
	type: 'button',
	className: '',
	label: ''
};

export default injectSheet(buttonStyle)(Button);