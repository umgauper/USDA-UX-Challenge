import React, { Component } from 'react'
import IncomeInputs from './IncomeInputs'
import update from 'react-addons-update'

export default class AdultIncomeQuestion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			incomeObjectsArray: [{}],
			incomeSources: 1
		}
	}

	render() {
		let question = this.props.question
		let name = this.props.name
		let options = this.props.options
		let defaultOption = this.props.options[0]

		let addIncomeSource = () => {
			this.setState({incomeSources: update(this.state.incomeSources, {$set: this.state.incomeSources + 1})})	
			this.setState( {incomeObjectsArray: update(this.state.incomeObjectsArray, {$push: [{}] }) })
		}

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
			let isValid = !/[^0-9]/.test(e.target.value)
			newIncomeObjectsArray[i] = newIncomeObjectsArray[i] || {}
			newIncomeObjectsArray[i].amt = e.target.value 
			newIncomeObjectsArray[i].isValid = isValid
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
					options={options}
					validities={ this.state.incomeObjectsArray.map( (el) => { return el.isValid }) }
					addIncomeSource={addIncomeSource}
					incomeSources={this.state.incomeSources}
					/>				
				<button 
					onClick={nextClickHandler}
					disabled={ this.state.incomeObjectsArray.length === 0 ||  this.state.incomeObjectsArray.some( (el) => { return !el.amt || !el.isValid || !el.frequency })   }

					>NEXT</button>
			</div>)
	}			
}