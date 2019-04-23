import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { connect } from 'react-redux';

import { openModal, closeModal, onUserChange, onPasswordChange, loginClick, loginResponse, fetchUser } from '../../actions';

import Modal from "../../ui/components/Modal";

class Login extends Component {
	constructor(props){
		super(props);
		
	}

	handleGoToSignup(){
		this.props.closeModal('login');
		this.props.openModal('signup');
	}

	handleLoginResponse(data){
		localStorage.setItem('token', data.token);
		this.props.fetchUser(data.token);
		this.props.closeModal('login');
		return alert(data.message)


	}
	
	componentWillReceiveProps(nextProps){
		if(nextProps.loginInfo !== this.props.loginInfo){
	
			this.handleLoginResponse(nextProps.loginInfo);

		}
		

	}

	render() {

		return (
			<Modal 
				show={this.props.show}
				context={'login'}
				closeModal={() => this.props.closeModal('login')}
				onUserChange={this.props.onUserChange}
				onPasswordChange={this.props.onPasswordChange}
				onPrimaryButtonClick={() => this.props.loginClick(this.props.username, this.props.password)}
				onSecundaryButtonClick={() => this.handleGoToSignup(this.props.closeModal, this.props.openModal)}/>
		);
	}
}


const mapStateToProps = (state) => {

	return {
		show: state.login.show,
		username: state.form.username,
		password: state.form.password,
		loginInfo: state.users.loginInfo
	}
	
};


export default injectSheet()(connect(mapStateToProps, {closeModal, openModal, onUserChange, onPasswordChange, loginClick, fetchUser})(Login))



