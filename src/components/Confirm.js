import React, { Component } from 'react'
const jquery = require('jquery')

export default class Confirm extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let info = this.props.formInfo.appState
		let namesArray = this.props.formInfo.appState.namesArray
		let adultNamesArray	= this.props.formInfo.appState.adultNamesArray


		let childrenParagraphs = namesArray.map( (el) => {
			return (<div>
						<p> Is {el.first} a student at Wheatland Elementary?</p>
						<span>{el.isStudent ? 'yes' : 'no'}</span>
						<p> Is {el.first} homeless, a migrant, or a runaway?</p>
						<span>{el.isMigrant ? 'yes' : 'no'}</span>
						<p> Is {el.first} a foster child?</p>
						<span>{el.isFoster ? 'yes': 'no'}</span>
						<p>Is {el.first} a Head Start participant?</p>
						<span>{el.isHeadStart ? 'yes': 'no'}</span>
					</div>
				)
		})


		let childrenIncomes = namesArray.map( (el) => {
			return 	(<div>
						<h6>{el.first}</h6>
						<p>{el.wages ? `Wages/Salary: ${el.wages.frequency} x ${el.wages.amt}` : ''}</p>
						<p>{el.socialSecurityOwn ? `Social Security Benefits for the child's disability: ${el.socialSecurityOwn.frequency} x ${el.socialSecurityOwn.amt}` : ''} </p>
						<p>{el.socialSecurityParent ? `Social Security Benefits for a parent's disability: ${el.socialSecurityParent.frequency} x {$el.socialSecurityParent.amt}` : ''}</p>
						<p>{el.spendingMoney ? `Spending Money: ${el.spendingMoney.frequency} x ${el.spendingMoney.amt}` : ''}</p>
				</div>)
		})

		let adultIncomes = adultNamesArray.map( (el) => {
			var arr = []
			for (var prop in el) {
				if (el.hasOwnProperty(prop) && prop !== 'first' && prop !== 'last') {
					arr.push( <div><h5>{prop}:</h5>
								<p>{el[prop].amt}</p>
								<p>{el[prop].frequency}</p>
								</div>
						)

				}
			}

			return (
					<div> 
						<h6>{el.first}</h6>
						{arr}

						</div>
				)

		})

		let postJSON = () => {
			console.log('data posted')
			jquery.post('http://localhost:3000/', info)
		}

		return (<div>
			<h2> Confirmation Page</h2>
			{childrenParagraphs}
			<h3>Child Income</h3>
			{childrenIncomes}
			{info.caseNumber ? `Case Number: ${info.caseNumber}` : '' }
			{info.SSN ? `Social Security Number: ${info.SSN}` : '' }

			<h3>Adult Income</h3>
			{adultIncomes}

			<button onClick={ () => {  postJSON() } }>Submit</button>
			</div>
			)
	}
}

