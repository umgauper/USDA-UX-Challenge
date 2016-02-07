import React, { Component } from 'react';

export default class Question10 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Does child[n] receive Social Security benefits because the childs parent is disabled, retired, or deceased?';

		//IF “yes” THEN How much earnings? [input box] How often are earnings received?
		//<div>Weekly</div>
		//<div>Two times a week</div>
		//<div>Two times a month</div>
		//<div>Once a month</div>


		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}