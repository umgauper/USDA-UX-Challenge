import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Question12 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfAdults: 1,
			namesArray: [{first: '', last: ''}]
		}
	}

	render() {
		let question = 'Please click the add button to list the first and last name of all adults living in your household:'

		let isValid = (str) => {
			return !/[^a-zA-Z]/.test(str)
		}

		let updateFirstNames = (e, i) => {
			e.preventDefault()
			let newNamesArray = this.state.namesArray
			newNamesArray[i].first = e.target.value
			newNamesArray[i].firstIsValid = isValid(e.target.value)
			this.setState({namesArray: newNamesArray})
		}

		let updateLastName = (e, i) => {
			let newNamesArray = this.state.namesArray
			newNamesArray[i].last = e.target.value
			newNamesArray[i].lastIsValid = isValid(e.target.value)
			this.setState({namesArray: newNamesArray})
		}

		
		let addInputField = () => {
			let newNamesArray = this.state.namesArray
			newNamesArray.push({first: '', last: ''})
			this.setState({namesArray: newNamesArray})
			this.setState({numberOfAdults: ++this.state.numberOfAdults})
		}

		let handleClick = (e, namesArray) => {
			e.stopPropagation()
			let firstNamesArray = namesArray.map( (el) => { 	//TODO: It might be better to move firstNamesArray creation into the action creator?
																//so calling the addChildNames dispatch from somewhere else doesn't mess up the name index mapping
				return el.first
			})
			this.props.onQuestion12NextClick(namesArray, firstNamesArray)
		}


		let styles = {
			addAdult: {
				background: 'rgb(191, 189, 189)',
				border: '5px solid rgb(191, 189, 189)',
				borderRadius: '10px',
				width: 150,
				height: 15,
				padding: '5px 5px 5px 5px'
			}
		}

		return (
			<div>
				<h6>{question}</h6>
			
				{(()=> {
					let inputsArr = []
					let num = this.state.numberOfAdults
					let i = 0
				 	while (i < num) {
				 		let j = i
				 		let nameObj = this.state.namesArray[j]
				 		inputsArr.push(<div>
									<input 
										placeholder="First"
										onChange={(e) => updateFirstNames(e, j)} type="text" />
									<input
										placeholder="Last" 
										onChange={(e) => updateLastName(e, j)} type="text" />
									<span
										style={ { color: 'rgb(211, 36, 33)'}}
										>{ (nameObj.firstIsValid === false || nameObj.lastIsValid === false) ? 'Invalid Entry' : ''}</span>
								</div>)
				 		i++
				 		}
				 	return inputsArr
				 	
					})()
				}
				<div
				style={styles.addAdult} 
				onClick={addInputField}>Add Adult + </div>

				<Link to="adultIncome/13">
					<button 
						onClick={(e)=> { handleClick(e, this.state.namesArray) } }
						disabled={  this.state.namesArray.some( (el) => { return !el.firstIsValid || !el.lastIsValid }) 
									|| this.state.namesArray.some( (el) => { return el.first === '' || el.last === ''})}
						>
						NEXT
					</button>
				</Link>
			</div>
			)
	}
}	