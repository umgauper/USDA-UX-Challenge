import React, { Component } from 'react';

export default class Question12 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Please enter the first and last name of each adult household member (highlighting adult household members says: an adult household member is any person living in your household that shares income and expenses, that was NOT listen in step 1, e.g. he/she is not an infant, child, or student up to grade 12)'

		//(+ button to add new name)


		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}