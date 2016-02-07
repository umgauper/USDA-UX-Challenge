import React, { Component } from 'react';

export default class Question2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Did the children you entered in the previous step include all children who live in your household, even children who are not your direct descendants? (For example, nieces/nephews who live with you, friends children who are staying with you) [Yes, continue] [No, go back]';
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