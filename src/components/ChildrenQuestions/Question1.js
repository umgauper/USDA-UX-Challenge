import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Question1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfChildren: 1
		}
	}

	render() {
		let question = 'Please click the add button to list the first, middle initial (if applicable), and last name of all children living in your household: (include all household members who are infants, children, and students up to and including grade 12)';
		let addInputField = ()=> {
			console.log('showing input fields');
			this.setState({numberOfChildren: ++this.state.numberOfChildren});
		}
		let makeNameInputs = () => {
			let num = this.state.numberOfChildren;
			let nameInputs = [];
			while(num > 0) {
			 	nameInputs.push(<div>
									<input type="text"/>
									<input type="text"/>
									<input type="text"/>
								</div>)
				num--;
			}
			return nameInputs;
		}
		
		let namesArray = [
			{first: 'aidan',
			 MI: 'j',
			 last: 'gauper'
			}, 
			{first: 'orrin',
			MI: 'a',
			last: 'gauper'
			}
		]

		let handleClick = ()=> {
			this.props.onNextClick(namesArray)
		}

		return (
			<div>
				<h6>{question}</h6>
				<div onClick={addInputField}>Add Child</div>
				{makeNameInputs()}
				<Link to="children/2">
					<button 
						onClick={handleClick(namesArray)}>
						NEXT
					</button>
				</Link>
			</div>
			)
	}
}