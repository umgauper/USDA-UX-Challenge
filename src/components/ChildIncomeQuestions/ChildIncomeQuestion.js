import React, { Component } from 'react'
import IncomeInput from './IncomeInput'

export default class ChildIncomeQuestion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			amt: null,
			frequency: null
		}
	}

	render() {
		let question = this.props.question
		let names = this.props.names

	
		
		return (
			<div>
				
				{names.map( (name, i) => {
					return (<div> 
								<p>{question(name)}</p>
								<IncomeInput 
									i={i}
									incomeCategory={this.props.incomeCategory}
									onNextClick={this.props.onNextClick}
									/>
							</div>
							)
				})}
			</div>)
	}			
}
