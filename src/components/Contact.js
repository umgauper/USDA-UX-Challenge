import React, { Component } from 'react';
import update from 'react-addons-update'

export default class Contact extends Component { //TODO: finish this part so next click sends updated state! (add onChange handlers to inputs!)
	constructor(props) {
		super(props)
		this.state = {
			contactInfo: {
				aptNumber: '',
				city: '',
				state: '',
				zip: null,
				date: '',
				name: '',
				phone: null,
				email: '',
				certified: false
			}
		}
	}

	render() {
		let nextClickHandler = () => {
			console.log(this.state)
			this.props.onContactNextClick(this.state)
		}

		let handleInput = (obj) => {
			let newContactInfo = Object.assign({}, this.state.contactInfo, obj)
			this.setState({contactInfo: newContactInfo})
		}

		return (
			<div>
				<h3>Contact	Section</h3>
				<p> Apt #</p>
				<input type="text" onChange={(e)=> { handleInput({aptNumber: e.target.value})} }/>
				<p> City</p>
				<input type="text" onChange={(e)=> { handleInput({city: e.target.value})} }/>
				<p> State</p>
				<input type="text" onChange={(e)=> { handleInput({state: e.target.value})} }/>
				<p>Zip Code</p>
				<input type="text" onChange={(e)=> { handleInput({zip: e.target.value})} }/>
				<p>Todays Date</p>
				<input type="text" onChange={(e)=> { handleInput({date: e.target.value})} }/>
				<p>Your Name</p>
				<input type="text" onChange={(e)=> { handleInput({name: e.target.value})} }/>
				<p>daytime phone</p>
				<input type="text" onChange={(e)=> { handleInput({phone: e.target.value})} }/>
				<p>email</p>
				<input type="email" onChange={(e)=> { handleInput({email: e.target.value})} }/>

				<p>"I certify (promise) that all information on this application is true and that all income is reported. I understand that this information is given in connection with the receipt of federal funds, and that school officials may verify(check) the information. I am aware that if I purposely give false information, my children may lose meal benefits, and I may be prosecuted under applicable state and Federal laws."</p>
				<input type="checkbox" onChange={(e)=> { handleInput({certified: !this.state.contactInfo.certified})} }/>
				<button onClick={nextClickHandler}>NEXT</button>	
			</div>
			)
	}
}

// TODO: state drop-down input? (and find users' zip automatically?)