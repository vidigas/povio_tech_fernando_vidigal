import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../atoms/Button';

const renderMenuButtons = (menuButtons, buttonAction) => {
  return menuButtons.map( button => {
    return <Button label={button} key={button} onClick={ () => buttonAction(button) } />;
  });
};



const Menu = ({ classes, loggedButtons, notLoggedButtons, buttonAction, userInfo }, ) => {
  let menuButtons = userInfo.username ? loggedButtons : notLoggedButtons;

  return (
    <div className={classes.container}>

      {renderMenuButtons(menuButtons, buttonAction)}
    </div>
  )
}

const style = {
  container: {
    'height': '85px',
    'paddingLeft': '20px',
    'width': '500px',
    backgroundColor: '#eaf2ff'
  },

}

// Header.propTypes = {
// 	username: propTypes.string.isRequired,
//   likes: propTypes.number.isRequired,
// 	id: propTypes.string.isRequired,
// 	onClick: propTypes.func.isRequired,
// };

export default injectSheet(style)(Menu);