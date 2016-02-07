import React, { Component } from 'react';

export default class Question3 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'For each child, please indicate if he/she is a student at [...]:';

		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}