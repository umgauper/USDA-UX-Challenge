import React, { Component } from 'react'
import { Link } from 'react-router'


class IncomeInput extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			amt: null,
			frequency: null,
			showErrorMessage: false,
			showInput: false
		}
	}

	render() {

		let inputChangeHandler = (e) => { //move this state's and input handler to parent component 

			this.setState({amt: e.target.value})

			let isValid = !/[^0-9]/.test(e.target.value)

			this.setState({showErrorMessage: !isValid})
		}

		let errorMessage = 'WRONG'

		let yesClickHandler = () => {
			this.setState({showInput: true})
		}

		let radioClickHandler = (e) => {
			this.setState({frequency: e.target.value})
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

		let i = this.props.i

		let nextClickHandler = (e, i) => {
			if (this.props.activeIndex !== this.props.numberOfNames -1 ) {
				e.preventDefault() // don't go to a new path unless we're on the last name in the list of child names
			}
			console.log(makeChildIncomeObject())
			this.props.onNextClick(makeChildIncomeObject(), i)

			this.props.increaseActiveIndex()
		}

		let noClickHandler = (e) => {
			if (this.props.activeIndex !== this.props.numberOfNames - 1 ) {
				e.preventDefault() // don't go to a new path unless we're on the last name in the list of child names
			}

			this.props.increaseActiveIndex()
		}

		let nextPath = Number.parseInt(window.location.hash.match(/childIncome\/?([0-9]+)/)[1]) + 1

		return (
			<div>
				<button onClick={yesClickHandler}>Yes</button>
				<Link to={nextPath === 12 ? "adultIncome/12" : "childIncome/" + nextPath}
							onClick={ (e) => {noClickHandler(e)} }>
					<button>No</button>
				</Link>
				<div style={ this.state.showInput ? {display: 'block'} : {display: 'none'}}>
					<p>Please enter the dollar amount of the money received and select the frequency of the amount</p>
						<input type="radio" value="weekly" name={i} onClick={(e) => {radioClickHandler(e)}}/>
						<input type="radio" value="twiceweekly" name={i} onClick={(e) => {radioClickHandler(e)}}/>
						<input type="radio" value="monthly" name={i} onClick={(e) => {radioClickHandler(e)}}/>
						<input type="radio" value="twicemonthly" name={i} onClick={(e) => {radioClickHandler(e)}}/>
						<Link 
							to={nextPath === 12 ? "adultIncome/12" : "childIncome/" + nextPath}
							onClick={ (e) => {nextClickHandler(e, i)} }
							>
						<button 
							disabled={!this.state.frequency || !this.state.amt || this.state.showErrorMessage} 
							>NEXT
						</button>
						</Link>
					<input type="text" name="amt" onChange={(e) => inputChangeHandler(e)}/>
					<span style={this.state.showErrorMessage ? {display: 'block'} : {display: 'none'}}>{errorMessage}</span>
				</div>		
				
			</div>
		)
	}

}

export default IncomeInput
