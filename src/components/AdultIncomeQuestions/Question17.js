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
		let question = 'Please enter the last 4 digits of Social Security Number (SSN) of the Primary Wage Earner or Other Adult Household Member.'
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
				<p>{question}</p>
				<input 
					onChange={(e) => { handleInput(e) }}
					type="text"
					maxLength={4}/>
				<div><span
					style={ {color: 'rgb(211, 36, 33)'}}
				>{ this.state.isValid ? '' : 'Invalid Input'}</span>
				</div>
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