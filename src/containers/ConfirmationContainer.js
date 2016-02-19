import React from 'react'
import { connect } from 'react-redux'
//import  confirm from ./actions

import Confirm from '../components/Confirm'

const mapStateToProps = (state) => {
	return {
		formInfo: state
	}
}

export const ConfirmationContainer = connect(
	mapStateToProps
	)(Confirm)