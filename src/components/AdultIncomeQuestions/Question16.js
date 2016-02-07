import React, { Component } from 'react';

export default class Question16 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Does adult[n] receive income from investments or any other source?'

		//IF “yes”
		 //THEN: Please click the + button for each income source, select the type of income, 
		 //and fill out the information (each + generates drop-down: [interest, dividends, income from trusts or 
		 //estates, rental income, royalties, prize winnings, money withdrawn from savings, regular contributions such as cash gifts from friends or family outside the household]), strike benefits, unemployment insurance, or other] + [income input box] + 
		//<FrequencyButtons />


		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}