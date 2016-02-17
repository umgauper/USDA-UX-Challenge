import React, { Component } from 'react'

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

		let radioClickHandler = (e) => {
			this.setState({frequency: e.target.value})
		}

		let inputChangeHandler = (e) => {
			this.setState({amt: e.target.value})
		}


		let makeChildIncomeObject = () => {
			return Object.defineProperty({}, this.props.incomeCategory, {
				enumerable: true,
      			writable: true,
      			configurable: true,
      			value: {                                //TODO: refactor so object is { wages: blah, amt: , fqcy} ? to match adult names objects...
      				amt: this.state.amt,
      				frequency: this.state.frequency
      			}
			})
		}

		let clickHandler = (i) => {
			console.log(makeChildIncomeObject())
			this.props.onNextClick(makeChildIncomeObject(), i)
		}

		return (
			<div>
				
				{names.map( (el, i) => {
					return (<div> 
								<p>{question}</p>
								<p>{el}</p>
								<input type="radio" value="weekly" name="frequency" onClick={(e) => {radioClickHandler(e)}}/>
								<input type="radio" value="twiceweekly" name="frequency" onClick={(e) => {radioClickHandler(e)}}/>
								<input type="radio" value="monthly" name="frequency" onClick={(e) => {radioClickHandler(e)}}/>
								<input type="radio" value="twicemonthly" name="frequency" onClick={(e) => {radioClickHandler(e)}}/>
								<input type="text" name="amt" onChange={(e) => {inputChangeHandler(e)}}/>
								<button onClick={ () => {clickHandler(i)} }>NEXT</button>
							</div>
						)
				})}
			</div>)

	}			
}