import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../atoms/Button';

const renderMenuButtons = (menuButtons, buttonAction, logoutAction) => {
  return menuButtons.map( button => {
    return <Button label={button} key={button} onClick={ () => button === 'logout' ? logoutAction() : buttonAction(button) } />;
  });
};



const Menu = ({ classes, loggedButtons, notLoggedButtons, buttonAction, userInfo, logoutAction }, ) => {
  let menuButtons = userInfo.username ? loggedButtons : notLoggedButtons;

  return (
    <div className={classes.container}>

      {renderMenuButtons(menuButtons, buttonAction, logoutAction)}
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

export default injectSheet(style)(Menu);