import React, { Component } from 'react'
import IncomeInputs from './IncomeInputs'
import update from 'react-addons-update'
import { Link } from 'react-router'

export default class AdultIncomeQuestion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			incomeObjectsArray: [{}],
			incomeSources: 1,
			showInput: false
		}
	}

	render() {
		let i = this.props.i
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

		let nextClickHandler = (e) => {

			if(this.props.activeIndex !== this.props.numberOfNames - 1 ) { 
				e.preventDefault();
			 } 

			 this.props.increaseActiveIndex()
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

		let noClickHandler = (e) => {
			if(this.props.activeIndex !== this.props.numberOfNames - 1 ) { 
				e.preventDefault();
			 } 

			 this.props.increaseActiveIndex()

		}


		let numberOfNames = this.props.numberOfNames
		let nextPath = Number.parseInt(window.location.hash.match(/adultIncome\/?([0-9]+)/)[1]) + 1

		return (
			<div style={ i === this.props.activeIndex ? {display: 'block'} : {display: 'none'} }>
				<div>{question(name)}</div>
				<button onClick={ () => {this.setState({showInput: true}) } }>Yes</button>
				<Link to={"adultIncome/" + nextPath} onClick={ (e) => {noClickHandler(e)} }>
					<button>No</button>
				</Link>
				<IncomeInputs 
					show={this.state.showInput}
					name={name}
					radioClickHandler={radioClickHandler}
					inputChangeHandler={inputChangeHandler}
					optionClickHandler={optionClickHandler}
					options={options}
					validities={ this.state.incomeObjectsArray.map( (el) => { return el.isValid }) }
					addIncomeSource={addIncomeSource}
					incomeSources={this.state.incomeSources}
					/>
				<Link to={"adultIncome/" + nextPath} onClick={(e) => { nextClickHandler(e) }  }>
					<button 
					disabled={ this.state.incomeObjectsArray.length === 0 ||  this.state.incomeObjectsArray.some( (el) => { return !el.amt || !el.isValid || !el.frequency })   }
					>NEXT</button>
				</Link>				
				
			</div>)
	}			
}