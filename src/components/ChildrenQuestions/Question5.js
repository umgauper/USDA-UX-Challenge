import React, { Component } from 'react'
import ChildInfoQuestion from './ChildInfoQuestion'

export default class Question5 extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		let heading = 'For each child, please indicate if he/she is homeless, a migrant, or a runaway'
		let question = (name) => {
			return <p>Is <b>{name}</b> homeless, a migrant, or a runaway?</p>
		}

		return (<ChildInfoQuestion 
					onYesClick={this.props.onChildInfoClick.bind(null, {isMigrant: true})} 
					onNoClick={this.props.onChildInfoClick.bind(null, {isMigrant: false})}
					question={question}
					heading={heading}
					names={this.props.names}
						/>)
	}
}