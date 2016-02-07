import React, { Component } from 'react';

export default class Question14 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Is adult[n] in the U.S. military and does adult[n] receive military basic pay or cash bonuses, or military allowances for off-base housing, food or clothing?  [Do NOT re port combat pay, FSSA or  privatized housing allowances';

		//IF "yes", THEN: 
		//Please click the + button for each income source, select the type of income, and fill out the information (each + generates drop-down: [basic pay or cash bonuses, or military allowances for off-base housing, food or clothing] + [income input box] 
		//<FrequencyButtons/>

		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}