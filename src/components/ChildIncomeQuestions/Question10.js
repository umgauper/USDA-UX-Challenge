import React, { Component } from 'react'
import ChildIncomeQuestion from './ChildIncomeQuestion'

export default class Question10 extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		let question = "Does child[n] receive Social Security benefits because the child's parent is disabled, retired, or deceased?"
		let incomeCategory = 'socialSecurityParent'
		

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
