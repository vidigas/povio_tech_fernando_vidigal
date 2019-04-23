import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../atoms/Button';


const renderButton = (isLiked, clickAction, isLoggedIn ) => {
  let label = isLiked ? 'unlike' : 'like' ;

 if(!isLoggedIn) return;
 else return <Button label={label} onClick={clickAction} />
}

const renderLikes = (classes, likes, clickAction, isLiked, isLoggedIn ) => {

     return (
      <div className={classes.like}>
        <span className={classes.span}> {likes} likes </span> <br/>
         {renderButton(isLiked, clickAction, isLoggedIn)}
      </div>
      );
         
}

const Card = ({key, classes, username, id, likes, clickAction, isLiked, isLoggedIn }) => {
    
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <span className={classes.username}> {username} </span> <br/>
      </div>
      {renderLikes(classes, likes, clickAction, isLiked, isLoggedIn)}
    </div>
  )
}

const style = {
  container: {
    height: '120px',
    width: '400px',
    backgroundColor:({ isLiked }) => isLiked ? '#d6f7c5': '#eaf2ff',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    marginBottom: '20px'
  },
  user: {
    height: '100px',
    margin: '0',
    width: '250px',
    padding: '0',
  },
  username: {
    fontSize: 'xx-large'
  },
  span: {
    marginLeft: '15px',
    fontSize: 'large'
  }
}

Card.propTypes = {
	username: propTypes.string.isRequired,
  likes: propTypes.number.isRequired,
	id: propTypes.string.isRequired,
	clickAction: propTypes.func.isRequired,
};

export default injectSheet(style)(Card);