import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { connect } from 'react-redux';

import { closeModal } from '../../actions';

import Modal from "../../ui/components/Modal";

class Signup extends Component {
	constructor(props){
		super(props);
		
	}

	render() {
		return (
			<Modal show={this.props.show} context={'signup'} closeModal={() => this.props.closeModal('signup')}/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		show: state.signup.show
	}
	
};


export default injectSheet()(connect(mapStateToProps, {closeModal})(Signup))