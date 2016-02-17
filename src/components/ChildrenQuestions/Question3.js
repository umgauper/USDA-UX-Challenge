import React, { Component } from 'react';
import ChildInfoQuestion from './ChildInfoQuestion'

export default class Question3 extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return false
	}
	
	render() {
		let heading = 'For each child, please indicate if he/she is a student at Wheatland Elementary'
		let question = (name) => {
			return `Is ${name} a student at Wheatland Elementary?`
		}

		return (<ChildInfoQuestion 
					onYesClick={this.props.onChildInfoClick.bind(null, {isStudent: true})} 
					onNoClick={this.props.onChildInfoClick.bind(null, {isStudent: false})}
					question={question}
					heading={heading}
					names={this.props.names}
						/>)
	}
}