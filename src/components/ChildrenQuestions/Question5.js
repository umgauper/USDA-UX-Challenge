import React, { Component } from 'react';

export default class Question5 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'For each child, please indicate if he/she is homeless, a migrant, or a runaway:'
		let showInputFields = ()=> {
			console.log('showing input fields');
		}

		return (
			<div>
				<h6>{question}</h6>
				<div onClick={showInputFields()}>Click</div>
			</div>
			)
	}




}