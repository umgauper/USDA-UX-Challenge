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

		let styles={
			table: {
				border: '2px solid rgb(100, 100, 100)',
				borderSpacing: '0.5rem',
				marginBottom: 10
			}
		}


		let childrenParagraphs = namesArray.map( (el) => {
			return (<table style={styles.table}>
						<tr>
							<td style={ {width: 400} }> Is {el.first} a student at Wheatland Elementary?</td>
							<td style={ {width: 30}}>{el.isStudent ? 'Yes' : 'No'}</td>
						</tr>
						<tr>
							<td> Is {el.first} homeless, a migrant, or a runaway?</td>
							<td>{el.isMigrant ? 'Yes' : 'No'}</td>
						</tr>
						<tr>
							<td> Is {el.first} a foster child?</td>
							<td>{el.isFoster ? 'Yes': 'No'}</td>
						</tr>
						<tr>
							<td>Is {el.first} a Head Start participant?</td>
							<td>{el.isHeadStart ? 'Yes': 'No'}</td>
						</tr>
					</table>
				)
		})


		let childrenIncomes = namesArray.map( (el) => {
			return 	(<div>
						<p><b>{el.first}</b></p>
						<p>{el.wages ? `Wages/Salary: ${el.wages.frequency} x $${el.wages.amt}` : ''}</p>
						<p>{el.socialSecurityOwn ? `Social Security Benefits for the child's disability: ${el.socialSecurityOwn.frequency} x $${el.socialSecurityOwn.amt}` : ''} </p>
						<p>{el.socialSecurityParent ? `Social Security Benefits for a parent's disability: ${el.socialSecurityParent.frequency} x ${$el.socialSecurityParent.amt}` : ''}</p>
						<p>{el.spendingMoney ? `Spending Money: ${el.spendingMoney.frequency} x $${el.spendingMoney.amt}` : ''}</p>
				</div>)
		})

		let adultIncomes = adultNamesArray.map( (el) => {
			var arr = []
			for (var prop in el) {
				if (el.hasOwnProperty(prop) && prop !== 'first' && prop !== 'last') {
					arr.push( <div><p>{prop}: {el[prop].frequency} x ${el[prop].amt}</p>
								</div>
						)

				}
			}

			return (
					<div> 
						<p><b>{el.first}</b></p>
						{arr}
						</div>
				)

		})

		let postJSON = () => {
			console.log('data posted')
			jquery.post('https://protected-waters-45009.herokuapp.com/', info, () => {
				alert('Form submitted!')				
			})
		}

		return (<div>
			<h3>Confirmation</h3>
			{childrenParagraphs}
			<h4>Child Income</h4>
			{childrenIncomes}
			{info.caseNumber ? `Case Number: ${info.caseNumber}` : '' }
			{info.SSN ? `Social Security Number: ${info.SSN}` : '' }

			<h4>Adult Income</h4>
			{adultIncomes}

			<button onClick={ () => {  postJSON() } }>Submit</button>
			</div>
			)
	}
}

