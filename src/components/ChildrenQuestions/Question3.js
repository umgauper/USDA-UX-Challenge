import React, { Component } from 'react';
import ChildInfoQuestion from './ChildInfoQuestion'

export default class Question3 extends Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		let question = 'Is ... a student at Wheatland Elementary'
		return (<ChildInfoQuestion 
					onYesClick={this.props.onYesClickStudent} 
					onNoClick={this.props.onNoClickStudent}
					question={question}
					names={this.props.names}
						/>)
	}
}