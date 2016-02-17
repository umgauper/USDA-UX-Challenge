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

		let updateFirstNames = (e, i) => {
			e.preventDefault()
			let newNamesArray = this.state.namesArray
			newNamesArray[i].first = e.target.value
			this.setState({namesArray: newNamesArray})
		}

		let updateLastName = (e, i) => {
			let newNamesArray = this.state.namesArray
			newNamesArray[i].last = e.target.value
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

		return (
			<div>
				<h6>{question}</h6>
				<div onClick={addInputField}>Add Adult</div>
				{(()=> {
					let inputsArr = []
					let num = this.state.numberOfAdults
					let i = 0
				 	while (i < num) {
				 		let j = i
				 		inputsArr.push(<div>
									<input onChange={(e) => updateFirstNames(e, j)} type="text" />
									<input onChange={(e) => updateLastName(e, j)} type="text" />
								</div>)
				 		i++
				 		}
				 	return inputsArr
				 	
					})()
				}

				<Link to="adultIncome/13">
					<button 
						onClick={(e)=> { handleClick(e, this.state.namesArray) } }>
						NEXT
					</button>
				</Link>
			</div>
			)
	}
}	