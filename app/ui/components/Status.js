import React from 'react';
import injectSheet from 'react-jss';

const style = {
	container: {
    textAlign: 'initial',
    fontWeight: 'bold',
    color: 'grey',
  }
}

const renderUser = userInfo => {
  if(userInfo.username) return (
    <div> {userInfo.username} <br />
    {userInfo.likes} likes </div>
  );
  else return 'Not connected'
}

const Status = ({ classes, userInfo }) => {
  return (
    <div className={classes.container}>
      {renderUser(userInfo)}
    </div>
  )
}

export default injectSheet(style)(Status);