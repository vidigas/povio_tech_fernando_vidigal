
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';


import { openModal, fetchUsers } from '../../actions';

import Signup from '../Auth/Signup';
import Login from '../Auth/Login';

import List from '../../ui/components/List';
import Menu from '../../ui/components/Menu';
import Form from '../../ui/components/Form';
import Modal from '../../ui/components/Modal';

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: true,
			inputValue: ''
		}
	}

	componentDidMount(){
		this.props.fetchUsers();

	}

	render() {
		const { classes } = this.props;

		return(
			<div>

				<Menu 
					menuButtons={['login', 'signup', 'update', 'logout']} 
					buttonAction={this.props.openModal}/>
				
				<List users={this.props.allUsers} clickAction={'yuyu'} />
				
				<Login />
				
				<Signup />


			</div>
			
		);
	}
}




const mapStateToProps = (state) => {
	return {
		show: state.login.show,
		allUsers: state.users.allUsers
	}
	
};


export default injectSheet(null)(connect(mapStateToProps, { openModal, fetchUsers })(Home))

