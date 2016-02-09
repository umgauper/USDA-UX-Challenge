import React from 'react'
import { connect } from 'react-redux'
import Question3 from '../components/ChildrenQuestions/Question3'

const mapStateToProps = (state) => {
	return {
		names: state.childname.namesArray
	}
}

const namesList = connect(
	mapStateToProps
	)(Question3)

export default namesList