import React, { Component } from 'react';

export default class Question17 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Please enter the last 4 digits of Social Security Number (SSN) of Primary Wage Earner or Other Adult Household Member.'

		//'' [4-digit input box] [button that says: I do not have a SSN'

		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}