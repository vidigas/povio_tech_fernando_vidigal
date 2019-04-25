import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../atoms/Button';


const renderButton = (isLiked, clickAction, isLoggedIn, id ) => {
  let label = isLiked ? 'unlike' : 'like' ;

 if(!isLoggedIn) return;
 else return (
      <Button
        label={label}
        onClick={clickAction}
        key={`button-${id}`}
        isLiked={isLiked}
   />);
}

const renderLikes = (classes, likes, clickAction, isLiked, isLoggedIn , id) => {

     return (
      <div className={classes.like} key={`like-${id}`}>
        <span className={classes.span} key={`span-${id}`}> {likes} likes </span> <br/>
         {renderButton(isLiked, clickAction, isLoggedIn, id)}
      </div>
      );
         
}

const Card = ({key, classes, username, id, likes, clickAction, isLiked, isLoggedIn }) => {
    
  return (
    <div className={classes.container} key={`container-${id}`}>
      <div className={classes.user} key={`user-${id}`}>
        <span className={classes.username}> {username} </span> <br/>
      </div>
      {renderLikes(classes, likes, clickAction, isLiked, isLoggedIn , id)}
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