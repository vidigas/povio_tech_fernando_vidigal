import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Button from '../../ui/atoms/Button';
import TextInput from '../../ui/atoms/TextInput';
import Card from '../../ui/components/Card';


const renderCards = users => {
	return users.map( user => {
		console.log(user)
		return <Card key={user._id} username={user.username} likes={user.likes} onClick={() => console.log('oi')}/>

	})
}


const List = ({ classes, users }) =>  {
		return([
			<h1 className={classes.title}>List of Users</h1>,
			<div className={classes.list} >
			{renderCards(users)}
			</div>]
		);
}


const style = {
	list: {
		height: '650px',
		width: '450px',
		padding: '20px',
		margin: '10px',
		'overflowY': 'scroll',
	},
	title: {
		marginLeft: '20px'
	}
};

export default injectSheet(style)(List);