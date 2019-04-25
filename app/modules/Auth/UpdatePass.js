import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { connect } from 'react-redux';

import { openModal, closeModal, onPasswordChange, updateClick, loginResponse, fetchUser } from '../../actions';

import Modal from "../../ui/components/Modal";

class Update extends Component {
	constructor(props){
		super(props);
		
	}

	handleCancel(){
		this.props.closeModal('update');
	}

	handleUpdateResponse(data){
		this.props.closeModal('update');
		return alert(data.message)


	}
	
	componentWillReceiveProps(nextProps){
		if(nextProps.updateInfo !== this.props.updateInfo){
	
			return this.handleUpdateResponse(nextProps.updateInfo);

		}

	}

	render() {

		return (
			<Modal 
				show={this.props.show}
				context={'update'}
				closeModal={() => this.props.closeModal('update')}
				onPasswordChange={this.props.onPasswordChange}
				onPrimaryButtonClick={() => this.props.updateClick(this.props.userInfo.token, this.props.password)}
				onSecundaryButtonClick={() => this.handleGoToSignup(this.props.closeModal, this.props.openModal)}/>
		);
	}
}


const mapStateToProps = (state) => {

	return {
		show: state.update.show,
		username: state.form.username,
		password: state.form.password,
		updateInfo: state.users.updateInfo,
		userInfo: state.users.userInfo
	}
	
};


export default injectSheet()(connect(mapStateToProps, {closeModal, openModal, onPasswordChange,updateClick, fetchUser})(Update))



