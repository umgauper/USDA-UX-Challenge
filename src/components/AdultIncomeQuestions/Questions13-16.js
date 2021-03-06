import React, { Component } from 'react'
import AdultIncomeQuestion from './AdultIncomeQuestion'

export const Question13 = class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0
		}
	}

	render() {
		let question = (name) => {
			return <p>Does <b>{name}</b> receive earnings from work such as salary, wages, cash bonuses, net income from self-employment (farm income, partnership income, professional practice income, or other), strike benefits, unemployment insurance, or any other earned income?</p>
		}

		let names = this.props.names
	
		let options = ['salary', 'wages', 'cash bonuses', 'net income from self employment', 'strike benefits', 'unemployment insurance', 'other']

		return (<div> {names.map( (name, i)=> {
			return (<AdultIncomeQuestion
					i={i} 
					question={question}
					activeIndex={this.state.activeIndex}
					increaseActiveIndex={()=> { this.setState( {activeIndex: this.state.activeIndex + 1 })}}
					name={name}
					numberOfNames={names.length}
					options={options}
					onAdultInfoClick={this.props.onAdultInfoClick.bind(null, i)}/>)

		}) }</div>)
	}
}

export const Question14 = class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0
		}
	}

	render() {
		let question = (name) => {
			return <p>Is <b>{name}</b> in the U.S. military and does <b>{name}</b> receive military basic pay or cash bonuses, or military allowances for off-base housing, food or clothing?  (Do NOT report combat pay, FSSA or  privatized housing allowances)</p>
		}

		let names = this.props.names
	
		let options = ['basic pay or cash bonuses', 'military allowances for off-base housing']

		return (<div> {names.map( (name, i)=> {
			return (<AdultIncomeQuestion 
					i={i}
					activeIndex={this.state.activeIndex}
					increaseActiveIndex={()=> { this.setState( {activeIndex: this.state.activeIndex + 1 })}}
					numberOfNames={names.length}
					question={question}
					name={name}
					options={options}
					onAdultInfoClick={this.props.onAdultInfoClick.bind(null, i)}/>)

        }) }</div>)     } }

export const Question15 = class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0
		}
	}

	render() {
		let question = (name) => {
			return <p>Does <b>{name}</b> receive retirement or disability income such as, but not limited to Social Security, railroad retirement, pensions, annuities, survivor’s benefits, disability benefits from Supplemental Security Income (SSI), private disability benefits, black lung benefits, worker’s compensation, veteran’s benefits, or related sources?</p>
		}

		let names = this.props.names
	
		let options = ['Social Security', 'railroad retirement', 'pensions', 'SSI', 'private disability benefits', 'black lung benefits', 'worker’s compensation', 'veteran’s benefits', 'related sources']

		return (<div> {names.map( (name, i)=> {
			return (<AdultIncomeQuestion 
						i={i} 
					question={question}
					activeIndex={this.state.activeIndex}
					increaseActiveIndex={()=> { this.setState( {activeIndex: this.state.activeIndex + 1 })}}
					name={name}
					numberOfNames={names.length}
					options={options}
					onAdultInfoClick={this.props.onAdultInfoClick.bind(null, i)}/>)

		}) }</div>)
	}
}

export const Question16 = class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0
		}
	}

	render() {
		let question = (name) => {
			return <p>Does <b>{name}</b> receive income from investments or any other source?</p>
		}

		let names = this.props.names

		let options =  ['interest, dividends, income from trusts or estates', 'rental income', 'royalties', 'prize winnings', 'money withdrawn from savings', 'regular contributions such as cash gifts from friends or family outside the household', 'strike benefits', 'unemployment insurance', 'other']
	

		return (<div> {names.map( (name, i)=> {
			return (<AdultIncomeQuestion 
						i={i} 
					question={question}
					activeIndex={this.state.activeIndex}
					increaseActiveIndex={()=> { this.setState( {activeIndex: this.state.activeIndex + 1 })}}
					name={name}
					numberOfNames={names.length}
					options={options}
					onAdultInfoClick={this.props.onAdultInfoClick.bind(null, i)}/>)

		}) }</div>)
	}
}



//TODO: export question and options constants to separate file!
// reduce repetition, make question components via a function ?





