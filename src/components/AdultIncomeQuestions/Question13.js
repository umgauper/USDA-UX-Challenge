import React, { Component } from 'react';

export default class Question13 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Does Adult[n] receive earnings from work such as salary, wages, cash bonuses, net income from self-employment (farm income, partnership income, professional practice income, or other), strike benefits, unemployment insurance, or any other earned income?'

		 //IF "yes", THEN: Please click the + button for each income source, select the type of income, 
		 //and fill out the information (each + generates drop-down: [farm income, partnership income,
		 // professional practice income, or other), strike benefits, unemployment insurance, or other] + 
		//[income input box]
		//<FrequencyButtons>


		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}