import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { connect } from 'react-redux';

import { closeModal } from '../../actions';

import Modal from "../../ui/components/Modal";

class Login extends Component {
	constructor(props){
		super(props);
		
	}

	render() {
		return (
			<Modal show={this.props.show} context={'login'} closeModal={() => this.props.closeModal('login')}/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		show: state.login.show
	}
	
};


export default injectSheet()(connect(mapStateToProps, {closeModal})(Login))