import React, { Component } from 'react'

export default class Question17 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			SSN: null
		}
	}

	render() {
		let question = 'Please enter the last 4 digits of Social Security Number (SSN) of Primary Wage Earner or Other Adult Household Member.'
		let nextClickHandler = () => {
			this.props.onNextClick(this.state)
		}

		let handleInput = (e) => {
			this.setState({SSN: e.target.value})
		}

		return (
			<div>
				<h6>{question}</h6>
				<input onChange={(e) => { handleInput(e) }} type="text"/>
				<button onClick={nextClickHandler}>NEXT</button>
			</div>
			)
	}
}