import React, { Component } from 'react'
import AdultIncomeQuestion from './AdultIncomeQuestion'

export default class Question13 extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let question = 'Does Adult[n] receive earnings from work such as salary, wages, cash bonuses, net income from self-employment (farm income, partnership income, professional practice income, or other), strike benefits, unemployment insurance, or any other earned income?'

	
		let options = ['salary', 'wages', 'cash bonuses', 'net income from self employment', 'strike benefits', 'unemployment insurance', 'other']

		return (
			<AdultIncomeQuestion 
				question={question}
				names={this.props.names}
				options={options}
				onAdultInfoClick={this.props.onAdultInfoClick}
			/>
			)
	}




}