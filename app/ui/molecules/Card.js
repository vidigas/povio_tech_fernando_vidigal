import React from 'react';
import injectSheet from 'react-jss';
import propTypes from 'prop-types';

import Button from '../atoms/Button';


const Card = ({ classes, username, id, likes, onClick }) => {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <span className={classes.username}> {username} </span> <br/>
        <span className={classes.span}> {likes} likes </span> <br/>
        <span className={classes.span}> offline </span>
      </div>
       <div className={classes.like}>
      <Button label={'like'} onClick={()=> console.log('aqui vai da like')} />
      </div>

    </div>
  )
}

const style = {
  container: {
    height: '120px',
    width: '400px',
    backgroundColor: '#eaf2ff',
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
	onClick: propTypes.func.isRequired,
};

export default injectSheet(style)(Card);