import React, { Component } from 'react'
import { Link } from 'react-router'
import { mainStyles } from './../../styles/main'

export default class Question1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfChildren: 1,
			namesArray: [{first: '', MI: '', last: ''}]
		}
	}

	render() {
		let question = 'Please click the add button to list the first, middle initial (if applicable), and last name of all children living in your household: (include all household members who are infants, children, and students up to and including grade 12)'

		let isValid = (str) => {
			return !/[^a-zA-Z]/.test(str)
		}

		let updateFirstName = (e, i) => {
			e.preventDefault()
			console.log('first name updating', e.target.value, 'i: ', i)
			let newNamesArray = this.state.namesArray
			newNamesArray[i].first = e.target.value
			newNamesArray[i].firstIsValid = isValid(e.target.value)
			this.setState({namesArray: newNamesArray})
		}

		let updateMiddleInitial = (e, i) => {
			let newNamesArray = this.state.namesArray
			newNamesArray[i].MI = e.target.value
			newNamesArray[i].MIisValid = isValid(e.target.value)
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
			newNamesArray.push({first: '', MI: '', last: ''})
			this.setState({namesArray: newNamesArray})
			this.setState({numberOfChildren: ++this.state.numberOfChildren})
			console.log('names array: ', this.state.namesArray)
		}

		let handleClick = (e, namesArray) => {
			e.stopPropagation()
			alert("fiiiring")
			let firstNamesArray = namesArray.map( (el) => { 	//TODO: It might be better to move firstNamesArray creation into the action creator?
																//so calling the addChildNames dispatch from somewhere else doesn't mess up the name index mapping
				return el.first
			})
			this.props.onNextClick(namesArray, firstNamesArray)
		}

		let styles = {
			addChild: {
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
				<h6>{question}:</h6>
				{(()=> {
					let inputsArr = []
					let num = this.state.numberOfChildren
					let i = 0
				 	while (i < num) {
				 		let j = i
				 		let nameObj = this.state.namesArray[j]
				 		inputsArr.push(<div>
									<input 
										placeholder="First"
										onChange={(e) => updateFirstName(e, j)} type="text" />
									<input 
										placeholder="MI"
										style={ {width: 50}}
										onChange={(e) => updateMiddleInitial(e, j)} type="text" maxLength={1} />
									<input 
										placeholder="Last"
										onChange={(e) => updateLastName(e, j)} type="text" />
									<span 
										style={ mainStyles.error }
										>{ (nameObj.firstIsValid === false || nameObj.MIisValid === false || nameObj.lastIsValid === false) ? 'Invalid Entry' : ''}</span>
								</div>)
				 		i++
				 		}
				 	return inputsArr
				 	
					})()
				}

				<div 
					onClick={addInputField}
                    style={styles.addChild} 
					>Add Child + </div>

				<Link 
				to="children/2">
					<button 
						onClick={(e)=> { handleClick(e, this.state.namesArray) } }
						disabled={  this.state.namesArray.some( (el) => { return !el.firstIsValid || !el.MIisValid || !el.lastIsValid }) 
									|| this.state.namesArray.some( (el) => { return el.first === '' || el.MI === '' || el.last === ''})
					}
						>
						NEXT
					</button>
				</Link>
			</div>
			)
	}
}	