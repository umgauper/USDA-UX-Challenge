import React, { Component } from 'react'
import ChildInfoQuestion from './ChildInfoQuestion'

export default class Question6 extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		let question = 'For each child, please indicate if he/she is a Head Start participant:'
		//console.log(this.props.store.getState())

		return (
			 <ChildInfoQuestion 
					onYesClick={this.props.onChildInfoClick.bind(null, {isHeadStart: true}) }
					onNoClick={this.props.onChildInfoClick.bind(null, {isHeadStart: false}) }
					question={question}
					names={this.props.names}
						/>
				)
			
	}
}