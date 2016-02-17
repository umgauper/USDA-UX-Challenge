import React, { Component } from 'react'
import ChildInfoQuestion from './ChildInfoQuestion'

export default class Question4 extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return false
	}
	
	render() {
		let heading = 'For each child, please indicate if he/she is a foster child:';
		let question = (name) => {
			return `Is ${name} a foster child?`
		}

		return (<ChildInfoQuestion 
					onYesClick={this.props.onChildInfoClick.bind(null, {isFoster: true})} 
					onNoClick={this.props.onChildInfoClick.bind(null, {isFoster: false})}
					question={question}
					heading={heading}
					names={this.props.names}
						/>)
			
	}
}