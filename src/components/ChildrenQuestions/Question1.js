import React, { Component } from 'react';

export default class Question1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'Please click the add button to list the first, middle initial (if applicable), and last name of all children living in your household: (include all household members who are infants, children, and students up to and including grade 12)';
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