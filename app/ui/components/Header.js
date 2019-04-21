import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../atoms/Button';


const Header = ({ classes }) => {
  return (
    <div className={classes.container}>

      <Button label={'login'} onClick={()=> console.log('aqui vai da like')} />
      <Button label={'signup'} onClick={()=> console.log('aqui vai da like')} />
      <Button label={'logout'} onClick={()=> console.log('aqui vai da like')} />

    </div>
  )
}

const style = {
  container: {
    'position':'fixed',
    'right': '25%',
    'height': '55px',
    'paddingLeft': '20px',
    'width': '250px',
  },

}

// Header.propTypes = {
// 	username: propTypes.string.isRequired,
//   likes: propTypes.number.isRequired,
// 	id: propTypes.string.isRequired,
// 	onClick: propTypes.func.isRequired,
// };

export default injectSheet(style)(Header);