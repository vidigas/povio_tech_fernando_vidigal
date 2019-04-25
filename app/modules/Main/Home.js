
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';


import { openModal, fetchUser, logout } from '../../actions';

import Signup from '../Auth/Signup';
import Login from '../Auth/Login';
import Update from '../Auth/UpdatePass';

import List from '../../ui/components/List';
import Menu from '../../ui/components/Menu';
import Form from '../../ui/components/Form';
import Modal from '../../ui/components/Modal';
import Status from '../../ui/components/Status';

class Home extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){

		let token = localStorage.getItem('token', token);
		if(token)  this.props.fetchUser(token);

	}

	handleLogout() {

		localStorage.removeItem('token');
		this.props.logout()
	}

	render() {
		const { classes } = this.props;

		return(
			<div>

				<Status userInfo={this.props.userInfo} />

				<Menu 
					loggedButtons={['update', 'logout']}
					notLoggedButtons ={['login', 'signup']}
					buttonAction={this.props.openModal}
					logoutAction={() => this.handleLogout()}
					userInfo={this.props.userInfo}/>
				
				<List />
				
				<Login />
				
				<Signup />

				<Update />


			</div>
			
		);
	}
}




const mapStateToProps = (state) => {
	return {
		show: state.login.show,
		userInfo: state.users.userInfo
	}
	
};


export default connect(mapStateToProps, { openModal, fetchUser, logout })(Home)

