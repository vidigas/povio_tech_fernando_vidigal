import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { connect } from 'react-redux';

import { openModal, closeModal, onUserChange, onPasswordChange, signupClick, fetchUser } from '../../actions';

import Modal from "../../ui/components/Modal";

class Signup extends Component {
	constructor(props){
		super(props);
		
	}

	handleGoToLogin(){
		this.props.closeModal('signup');
		this.props.openModal('login');
	}

	handleSignupResponse(data){
		this.props.fetchUser(data.token);
		this.props.closeModal('signup');
		return alert(data.message);

	}
	
	componentWillReceiveProps(nextProps){

		if(nextProps.signupInfo !== this.props.signupInfo){

			this.handleSignupResponse(nextProps.signupInfo);
		}
	}
		

	render() {
		return (
			<Modal 				
				show={this.props.show}
				context={'signup'}
				closeModal={() => this.props.closeModal('signup')}
				onUserChange={this.props.onUserChange}
				onPasswordChange={this.props.onPasswordChange}
				onPrimaryButtonClick={() => this.props.signupClick(this.props.username, this.props.password)}
				onSecundaryButtonClick={() => this.handleGoToLogin(this.props.closeModal, this.props.openModal)}/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		show: state.signup.show,
		username: state.form.username,
		password: state.form.password,
		signupInfo: state.users.signupInfo
	}
	
};


export default injectSheet()(connect(mapStateToProps, {closeModal, openModal, onUserChange, onPasswordChange, signupClick, fetchUser })(Signup))

