import React, { Component } from 'react'
import AdultIncomeQuestion from './AdultIncomeQuestion'

export default class Question13 extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let question = 'Does Adult[n] receive earnings from work such as salary, wages, cash bonuses, net income from self-employment (farm income, partnership income, professional practice income, or other), strike benefits, unemployment insurance, or any other earned income?'
		let names = this.props.names
	
		let options = ['salary', 'wages', 'cash bonuses', 'net income from self employment', 'strike benefits', 'unemployment insurance', 'other']

		return (<div> {names.map( (name, i)=> {
			return (<AdultIncomeQuestion 
					question={question}
					name={name}
					//names={this.props.names}
					options={options}
					onAdultInfoClick={this.props.onAdultInfoClick.bind(null, i)}/>)

		}) }</div>)
	}




}

/*names.map( (name) => {
				return (<AdultIncomeQuestion 
					question={question}
					name={name}
					//names={this.props.names}
					options={options}
					onAdultInfoClick={this.props.onAdultInfoClick}/>)
			})
*/