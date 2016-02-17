import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Question7 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			caseNumberInputDisplay: 'none',
			caseNumber: null
		}
	}

	render() {
		let question = 'Do any household members (including you) currently participate in one or more of the following assistance programs: SNAP, TANF, FDPIR?'

		let handleYesClick = () => {
			this.setState({caseNumberInputDisplay: 'block'})
		}

		let nextClickHandler = () => {
			this.props.onAssistanceNextClick(this.state.caseNumber)
		}

		let inputChangeHandler = (e) => {
			this.setState({caseNumber: e.target.value})
		}

		return (
			<div>
				<h6>{question}</h6>
				<button onClick={handleYesClick}>Yes</button>
				<Link to="childIncome/8"><button>No</button></Link>

				<div style={{display: this.state.caseNumberInputDisplay}}>
					<h4> Please enter your case number: </h4>
					<input type="text" onChange={(e) => { inputChangeHandler(e) }}/>
					<Link to="contact"><button onClick={nextClickHandler}>Next</button></Link>
				</div>
				
			</div>
			)
	}
}