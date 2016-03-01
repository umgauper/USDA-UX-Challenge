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
		let styles = {
			addIncomeSource: {
				background: 'rgb(191, 189, 189)',
				border: '5px solid rgb(191, 189, 189)',
				borderRadius: '10px',
				width: 200,
				height: 40,
				padding: '5px 5px 5px 5px'
			}

		}

		return (<div style={this.props.show ? {display: 'block'} : {display: 'none'} }> 
			 		{( () => {
			 			let name = this.props.name
						let inputsArr = []
						let num = this.props.incomeSources
						let i = 0
					 	while (i < num) {
					 		let j = i
					 		inputsArr.push(<div>
					 							<p>Type of Income: </p>
					 							<OptionsList 
					 								optionClickHandler={optionClickHandler}
					 								index={j}
					 								options={options}/>
			 								<p>Amount: </p>
			 								<span>$</span><input type="text" name="amt" onChange={(e) => {inputChangeHandler(e, j)}}/>
			 								<p>Frequency: </p>
			 								<div>
								 			<input type="radio" value="weekly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
								 			<span>Once a week</span>
								 			</div>
								 			<div>
											<input type="radio" value="twiceweekly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
											<span>Twice a week</span>
											</div>
											<div>
											<input type="radio" value="monthly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
											<span>Once a month</span>
											</div>
											<div>
											<input type="radio" value="twicemonthly" name={name + j} onClick={(e) => {radioClickHandler(e, j)}}/>
											<span>Twice a month</span>
											</div>
											
											<span style={{color: 'rgb(220, 36, 33)'}}>{ this.props.validities[j] === false ? 'Invalid Entry' : ''}</span>
				 						   </div>)
				 			i++
					 		}
					 	return inputsArr
					 	})()
					 }
			<button 
				style={styles.addIncomeSource}
				onClick={this.props.addIncomeSource}>Add Income Source </button>		

			</div>)
	}
}