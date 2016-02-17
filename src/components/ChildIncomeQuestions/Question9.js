import React, { Component } from 'react'
import ChildIncomeQuestion from './ChildIncomeQuestion'

export default class Question9 extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		let question = (name) => {
			return `Does ${name} receive Social Security benefits for the child's own blindness or disability?`
		}
		
		let incomeCategory = 'socialSecurityOwn'
		

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
