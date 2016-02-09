import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Question1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfChildren: 1,
			namesArray: [{first: '', MI: '', last: ''}]
		}
	}

	render() {
		let question = 'Please click the add button to list the first, middle initial (if applicable), and last name of all children living in your household: (include all household members who are infants, children, and students up to and including grade 12'

		let updateFirstNames = (e, i) => {
			e.preventDefault()
			console.log('first name updating', e.target.value, 'i: ', i)
			//let first = e.target.value
			let newNamesArray = this.state.namesArray
			newNamesArray[i].first = e.target.value
			this.setState({namesArray: newNamesArray})
		}

		let updateMiddleInitial = (e, i) => {
			//namesArray[i].MI = e.target.value
		}

		let updateLastName = (e, i) => {
			//namesArray[i].last = e.target.value
		}

		
		let addInputField = () => {
			let newNamesArray = this.state.namesArray
			newNamesArray.push({first: '', MI: '', last: ''})
			this.setState({namesArray: newNamesArray})
			this.setState({numberOfChildren: ++this.state.numberOfChildren})
			console.log('names array: ', this.state.namesArray)
		}

		let handleClick = (e, namesArray)=> {
			e.stopPropagation()
			alert("fiiiring")
			this.props.onNextClick(namesArray)
		}

		return (
			<div>
				<h6>{question}</h6>
				<div onClick={addInputField}>Add Child</div>
				{(()=> {
					let inputsArr = []
					let num = this.state.numberOfChildren
					let i = 0
				 	while (i < num) {
				 		let j = i
				 		inputsArr.push(<div>
									<input onChange={(e) => updateFirstNames(e, j)} type="text" />
									<input type="text" maxLength={1} />
									<input type="text" />
								</div>)
				 		i++
				 		}
				 	return inputsArr
				 	
					})()
				}

				<Link to="children/2">
					<button 
						onClick={(e)=> { handleClick(e, this.state.namesArray)}}>
						NEXT
					</button>
				</Link>
			</div>
			)
	}
}	