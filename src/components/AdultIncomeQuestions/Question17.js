import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Question17 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			SSN: null,
			isValid: true
		}
	}

	render() {
		let question = 'Please enter the last 4 digits of Social Security Number (SSN) of Primary Wage Earner or Other Adult Household Member.'
		let nextClickHandler = () => {
			this.props.onNextClick(this.state)
		}

		let handleInput = (e) => {
			this.setState({SSN: e.target.value})

			let isValid = !/[^0-9]/.test(e.target.value)
			this.setState({isValid})
		}

		return (
			<div>
				<h6>{question}</h6>
				<input 
					onChange={(e) => { handleInput(e) }}
					type="text"
					maxLength={4}/>
				<span>{ this.state.isValid ? '' : 'INVALID INPUT'}</span>
				<Link to="contact">
				<button 
					disabled={ !this.state.isValid || this.state.SSN === null || this.state.SSN.length < 4  }
					onClick={nextClickHandler}>NEXT

					</button>
				</Link>
			</div>
			)
	}
}