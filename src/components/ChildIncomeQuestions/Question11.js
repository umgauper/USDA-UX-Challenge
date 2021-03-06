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
		let question = (name) => {
			return <p>Does <b>{name}</b> regularly receive spending money or other income from a person outside the household such as an extended family member or friend?</p>
		}

		let incomeCategory = 'spendingMoney'
		

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
