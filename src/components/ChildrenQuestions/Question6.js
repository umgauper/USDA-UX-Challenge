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
		let heading = 'For each child, please indicate if he/she is a Head Start participant:'
		let question = (name) => {
			return `Is ${name} a Head Start participant?`
		}
		

		return (
			 <ChildInfoQuestion 
					onYesClick={this.props.onChildInfoClick.bind(null, {isHeadStart: true}) }
					onNoClick={this.props.onChildInfoClick.bind(null, {isHeadStart: false}) }
					question={question}
					heading={heading}
					names={this.props.names}
						/>
				)
			
	}
}