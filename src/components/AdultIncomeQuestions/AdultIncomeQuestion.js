import React, { Component } from 'react'
import IncomeInputs from './IncomeInputs'

export default class AdultIncomeQuestion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			incomeObjectsArray: []
		}
	}

	render() {
		let question = this.props.question
		let name = this.props.name
		let options = this.props.options
		let defaultOption = this.props.options[0]

		let makeAdultIncomeObject = (incomeCategory=defaultOption, amt, frequency) => {
			return Object.defineProperty({}, incomeCategory, {
				enumerable: true,
      			writable: true,
      			configurable: true,
      			value: {
      				amt, 
      				frequency
      			}
			})
		}

		let nextClickHandler = () => {
			this.state.incomeObjectsArray.forEach( (obj) => {
				let adultIncomeObject = makeAdultIncomeObject(obj.incomeCategory, obj.amt, obj.frequency)
			    this.props.onAdultInfoClick(adultIncomeObject)
			})
		}

		
		let radioClickHandler = (e, i) => {
			let newIncomeObjectsArray = this.state.incomeObjectsArray.slice(0)
			newIncomeObjectsArray[i] = newIncomeObjectsArray[i] || {}
			newIncomeObjectsArray[i].frequency = e.target.value
			this.setState({incomeObjectsArray: newIncomeObjectsArray})
		}

		let inputChangeHandler = (e, i) => {
			let newIncomeObjectsArray = this.state.incomeObjectsArray.slice(0)
			newIncomeObjectsArray[i] = newIncomeObjectsArray[i] || {}
			newIncomeObjectsArray[i].amt = e.target.value 
			this.setState({incomeObjectsArray: newIncomeObjectsArray})
		}

		let optionClickHandler = (e, i) => {
			let newIncomeObjectsArray = this.state.incomeObjectsArray.slice(0)
			newIncomeObjectsArray[i] = newIncomeObjectsArray[i] || {}
			newIncomeObjectsArray[i].incomeCategory = e.target.value
			this.setState({incomeObjectsArray: newIncomeObjectsArray})	
		}

		return (
			<div>
				<h6>{question(name)}</h6>
				<IncomeInputs 
					name={name}
					radioClickHandler={radioClickHandler}
					inputChangeHandler={inputChangeHandler}
					optionClickHandler={optionClickHandler}
					options={options}/>				
				<button onClick={nextClickHandler}>NEXT</button>
			</div>)
	}			
}