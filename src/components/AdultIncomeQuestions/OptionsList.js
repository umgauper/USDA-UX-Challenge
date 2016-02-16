import React, { Component } from 'react'

export default class OptionsList extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let options = this.props.options
		let optionClickHandler = this.props.optionClickHandler
		let i = this.props.index

		let optionsList = options.map( (option) => {
								return <option value={option} onClick={(e) => { optionClickHandler(e, i) }}>{option}</option>
							})

		return <select>{optionsList}</select>
	}
}