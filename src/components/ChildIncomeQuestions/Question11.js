import React, { Component } from 'react';

export default class Question11 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Does child[n] regularly receive  spending money or other income from a person outside the household such as an extended family member or friend?';

		// IF "yes", THEN: Please click the + button below and answer the questions for each income source the child receives from a person outside the household. (each + genreates [drop down: family, friend] [income input box] + 
		//[vertical buttons: (see prev. question)
		////<div>Weekly</div>
		//<div>Two times a week</div>
		//<div>Two times a month</div>
		//<div>Once a month</div>
		//TODO: ^^ put frequency divs in own component

		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}