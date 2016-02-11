import React, { Component } from 'react'
import ChildInfoQuestion from './ChildInfoQuestion'

export default class Question5 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let question = 'For each child, please indicate if he/she is homeless, a migrant, or a runaway:'

		return (<ChildInfoQuestion 
					onYesClick={this.props.onChildInfoClick.bind(null, {isMigrant: true})} 
					onNoClick={this.props.onChildInfoClick.bind(null, {isMigrant: false})}
					question={question}
					names={this.props.names}
						/>)
	}
}