import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

const TextInput = ({ classes, label, value, id, onChange, onClick, onBlur, key , type}) => {
  return (
    <div className={"input-field"}>
      
      <label key="password">{label}</label>

      <input type={type} key={key} id={id}  value={value} onChange={onChange} onBlur={onBlur} className={classes.input}/>

    </div>
  )
}

const style = {
  input: {
    width: '300px',
    height: '30px',
    margin: '10px 10px',
    textAlign: 'center',
    outline: 'none'
  }
}

TextInput.propTypes = {
	value: propTypes.string,
	id: propTypes.string,
	onChange: propTypes.func,
	onClick: propTypes.func,
	onBlur: propTypes.func
};

export default injectSheet(style)(TextInput);