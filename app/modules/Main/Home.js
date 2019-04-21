
import React, { Component } from 'react';
import injectSheet from 'react-jss';

import List from '../List';
import Header from '../../ui/components/Header';

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: true,
			inputValue: ''
		}
	}

	handleChange(e){
		console.log(e);
		var state = this.state;
		state.inputValue = e.target.value
		this.setState(state)
	}


	render() {
		const { classes } = this.props;

		return(
			<div>
				<Header />
				<List />	
			</div>
			
		);
	}
}


const style = {
	list: {
		width: '500px',
		margin: '15px',
		overflowY: 'scroll'

	}
};

export default injectSheet(style)(Home);