import React, { Component } from 'react'

export default class ChildIncomeQuestion extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let question = this.props.question
		let names = this.props.names

		let clickHandler = (i) => {
			this.props.onNextClick.call(null, 'wages', i)
		}

		return (
			<div>
				<p>{question}</p>
				<button>Yes</button>
				<button>No</button>
				{names.map( (el, i) => {
					return (<div> 
								<p>{el}</p>
								<input type="radio" value="weekly"/>
								<input type="radio" value="biweekly"/>
								<input type="radio" value="monthly"/>
								<input type="radio" value="bimonthly"/>
								<input type="text" name="amt"/>
								<button onClick={() => clickHandler(i) }>NEXT</button>
							</div>
						)
				})}
				

			</div>

			)
	}

}