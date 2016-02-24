import React, { Component } from 'react'
import  { Link } from 'react-router'

export default class ChildInfoQuestion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			indexOfActive: 0
		}
	}

	
	
	render() {
		let question = this.props.question
		let heading = this.props.heading

		let onYesClick = (e, i) => {
			if (this.state.indexOfActive !== this.props.names.length - 1 ) { 
					e.preventDefault() 
			}

			this.props.onYesClick(i)
			this.setState({indexOfActive: this.state.indexOfActive + 1 })
		}

		let onNoClick = (e, i) => {
			if (this.state.indexOfActive !== this.props.names.length - 1 ) {
				 e.preventDefault() 
				}

			this.props.onNoClick(i)
			this.setState({indexOfActive: this.state.indexOfActive + 1 })
		}

		let nextPath = Number.parseInt(window.location.hash.match(/children\/?([0-9])/)[1]) + 1

		let nextSection ="assistance"

		return (
			<div>
				<h5>{heading}</h5>
				{this.props.names.map((el, i)=> {
					return (<div style={  this.state.indexOfActive === i ? {display: 'block'} : {display: 'none'}} >
								<h6>{question(el)}</h6>
								<Link to={nextPath === 7 ? "assistance" : "children/" + nextPath} onClick={ (e) => { onYesClick(e, i) } }>
									<button>Yes</button>
								</Link>
								<Link to={nextPath === 7 ? "assistance" : "children/" + nextPath} onClick={ (e) => { onNoClick(e, i) } }>
									<button>NO</button>
								</Link>
							</div>
							)
				})}
			</div>
			)
	}
}

//TODO: Link to =="" doesn't work... what should it link to if we don't want it to be alink...? hmm..mm..mm.m.m.m.m.
//also children/4 , 4 needs to be dynamic number so we go to the next question in the list!