import React, { Component } from 'react';

export default class Question15 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Does adult[n] receive retirement or disability income such as, but not limited to Social Security, railroad retirement, pensions, annuities, survivor’s benefits, disability benefits from Supplemental Security Income (SSI), private disability benefits, black lung benefits, worker’s compensation, veteran’s benefits, or related sources?';

		//F "yes", THEN: Please click the + button for each income source, select the type of income,
		// and fill out the information (each + generates drop-down: [Social Security, railroad retirement, pensions, annuities, survivor’s benefits, disability benefits from Supplemental Security Income (SSI), private disability benefits, black lung benefits, worker’s compensation, veteran’s benefits, or other related source] + [income input box]
		//<FrequencyButtons/>


		return (
			<div>
				<h6>{question}</h6>
				<div>Click</div>
			</div>
			)
	}




}