import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

const NumberInput = ({ classes, value, id, onChange, onClick, onBlur }) => {
  return (
    <div className={classes.container}>
      <input type='text' id={id} value={value} onChange={onChange} onBlur={onBlur} className={classes.input}/>
    </div>
  )
}

const style = {
  container: {
    height: '100',
    '& > *': {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  },
  input: {
    width: '300px',
    height: '30px',
    margin: '0 10px',
    textAlign: 'center',
    outline: 'none'
  }
}

NumberInput.propTypes = {
	value: propTypes.string.isRequired,
	id: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	onClick: propTypes.func.isRequired,
	onBlur: propTypes.func
};

export default injectSheet(style)(NumberInput);