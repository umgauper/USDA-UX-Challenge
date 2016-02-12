import React, { Component } from 'react'
import ChildIncomeQuestion from './ChildIncomeQuestion'

export default class Question8 extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		let question = 'Does child[n] earn a salary or wages from a job?'
		let incomeCategory = 'wages'
		

		return (
			<ChildIncomeQuestion
				question={question}
				incomeCategory={incomeCategory}
				names={this.props.names}
				onNextClick={this.props.onChildInfoClick}
			/>
			)
	}




}
