import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';


import { fetchUsers, likeAction, unlikeAction, fetchUser } from '../../actions';


import Button from '../../ui/atoms/Button';
import TextInput from '../../ui/atoms/TextInput';
import Card from '../../ui/components/Card';


class List extends Component {
	
	constructor(props) {
		super(props);
	}	

	componentDidMount(){
		this.props.fetchUsers();
	}

	componentWillReceiveProps(nextProps) {
		console.log('ta batendo no willReceiveProps', nextProps.newlikes);

		if(nextProps.newLikes && nextProps.newlikes !== this.props.newLikes){

			this.handleLikeResponse(nextProps.userInfo);
		}
	}

	handleLikeResponse(data){
		console.log('ta batendo no handle')
		this.props.fetchUsers();
		this.props.fetchUser(data.token);
	}

	handleClick(user, isLiked){
		console.log(isLiked, 'vai dar like');
		if(isLiked){
			return this.props.unlikeAction(user, this.props.userInfo.token);
		}
		else return this.props.likeAction(user, this.props.userInfo.token);
	}

	renderCard(user){
		let isLiked = ( this.props.userInfo.username && this.props.userInfo.liked[0][user._id]) ? true : false
		let isLoggedIn = this.props.userInfo.username ? true : false

		return	(
			<Card 
				isLoggedIn={isLoggedIn}
				key={user._id}
				id={user._id}
				username={user.username}
				likes={user.likes}
				isLiked={isLiked}
				clickAction={() => this.handleClick(user._id, isLiked)}/>
			)
	}

	renderCards  () {
		return this.props.allUsers.map( user => {

			return this.renderCard(user)
		})
	}



	render (){
		const { classes } = this.props;
		return([
			<h1 className={classes.title}>List of Users</h1>,
		
			<div className={classes.list} >
		
			{this.renderCards()}
		
			</div>]);
	}
}

const mapStateToProps = (state) => {
	return {
		allUsers: state.users.allUsers,
		userInfo: state.users.userInfo,
		newlikes: state.users.newlikes
	}
	
};

const style = {
	list: {
		height: '80vh',
		width: '450px',
		padding: '20px',
		margin: '10px',
		'overflowY': 'scroll',
	},
	title: {
		marginLeft: '20px'
	}
};

export default injectSheet(style)(connect(mapStateToProps, {fetchUsers, likeAction, unlikeAction, fetchUser})(List))
