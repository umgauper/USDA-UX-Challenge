	import React, { Component } from 'react'
import IncomeInput from './IncomeInput'

export default class ChildIncomeQuestion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			amt: null,
			frequency: null,
			activeIndex: 0
		}
	}

	render() {
		let question = this.props.question
		let names = this.props.names

		let increaseActiveIndex = () => {
			this.setState({activeIndex: this.state.activeIndex + 1})
		}
		
		return (
			<div>
				
				{names.map( (name, i) => {
					return (<div style={ this.state.activeIndex === i ? {display: 'block'} : {display: 'none'} }> 
								<p>{question(name)}</p>
								<IncomeInput 
									i={i}
									incomeCategory={this.props.incomeCategory}
									onNextClick={this.props.onNextClick}
									increaseActiveIndex={increaseActiveIndex}
									numberOfNames={names.length}
									activeIndex={this.state.activeIndex}
									/>
							</div>
							)
				})}
			</div>)
	}			
}
