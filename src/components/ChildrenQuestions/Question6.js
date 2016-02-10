import React, { Component } from 'react'
import ChildInfoQuestion from './ChildInfoQuestion'

export default class Question6 extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let question = 'For each child, please indicate if he/she is a Head Start participant:'
		//console.log(this.props.store.getState())

		return (
			 <ChildInfoQuestion 
					onYesClick={this.props.onYesClickHeadStart} 
					onNoClick={this.props.onNoClickHeadStart}
					question={question}
					names={this.props.names}
						/>
				)
			
	}
}