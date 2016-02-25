import React, { Component } from 'react'
import OptionsList from './OptionsList'

export default class IncomeInputs extends Component {

	constructor(props) {
		super(props)
		this.state = {
			selected: null
		}
	}

	render() {
		let options = this.props.options
		

		let radioClickHandler = this.props.radioClickHandler
		let inputChangeHandler = this.props.inputChangeHandler
		let optionClickHandler = this.props.optionClickHandler

		return (<div style={this.props.show ? {display: 'block'} : {display: 'none'} }> 
			 		{( () => {
			 			let name = this.props.name
						let inputsArr = []
						let num = this.props.incomeSources
						let i = 0
					 	while (i < num) {
					 		let j = i
					 		inputsArr.push(<div><OptionsList 
					 								optionClickHandler={optionClickHandler}
					 								index={j}
					 								options={options}/>
								 			<input type="radio" value="weekly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
											<input type="radio" value="twiceweekly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
											<input type="radio" value="monthly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
											<input type="radio" value="twicemonthly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
											<input type="text" name="amt" onChange={(e) => {inputChangeHandler(e, j)}}/>
											<span>{ this.props.validities[j] === false ? 'WRONG' : ''}</span>
				 						   </div>)
				 			i++
					 		}
					 	return inputsArr
					 	})()
					 }
			<button onClick={this.props.addIncomeSource}>Add Income Source </button>		

			</div>)
	}
}