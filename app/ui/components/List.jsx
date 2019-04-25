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

		this.state = {
			newLikes: null,
			newUnlikes: null
		};
	}	

	async componentDidMount(){
		await this.props.fetchUsers();
	}

  didUpdate (next, prev) {
		if(!next) return false;
		else if (next !== prev) return true;
	}
	
	async componentWillReceiveProps(nextProps) {
		
		let hasNewLike = this.didUpdate(nextProps.newLikes, this.props.newLikes);
		let hasNewUnlike = this.didUpdate(nextProps.newUnlikes, this.props.newUnlikes);
		if(hasNewLike || hasNewUnlike) return await this.handleLikeResponse(nextProps.userInfo);
	}

	async handleLikeResponse(data){

		await this.props.fetchUsers();
		await this.props.fetchUser(data.token);

	}

	async handleClick(user, isLiked){
		if(isLiked) return await this.props.unlikeAction(user, this.props.userInfo.token);
		else return await this.props.likeAction(user, this.props.userInfo.token);
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
				clickAction={async () => await this.handleClick(user._id, isLiked)}/>
			)
	}

	renderCards  () {
		if(!this.props.allUsers.length) return <h4> No users registered.</h4>
		return this.props.allUsers.map( user => {

			return this.renderCard(user)
		})
	}

	render (){
		const { classes } = this.props;
		return([
			<h1 className={classes.title} key={`k1`}>List of Users - Sorted by likes</h1>,
		
			<div className={classes.list} key={`list`}>
		
			{this.renderCards()}
		
			</div>]);
	}
}

const mapStateToProps = (state) => {
	return {
		allUsers: state.users.allUsers,
		userInfo: state.users.userInfo,
		newLikes: state.users.newLikes,
		newUnlikes: state.users.newUnlikes
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
