import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Button from '../../ui/atoms/Button';
import TextInput from '../../ui/atoms/TextInput';
import Card from '../../ui/molecules/Card';


class List extends Component {
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
		return(
			<div>
				<Card id={'ide'} username={'Fernando'} likes={4} onClick={() => console.log('oi')}/>
				<Card id={'ide'} username={'Pedro'} likes={4} onClick={() => console.log('oi')}/>
				<Card id={'ide'} username={'Marcelo'} likes={4} onClick={() => console.log('oi')}/>

			</div>
		);
	}
}


const style = {
	info: {
		position: 'relative'
	}
};

export default injectSheet(style)(List);