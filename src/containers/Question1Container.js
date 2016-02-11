import React from 'react'
import { connect } from 'react-redux'
import { addChildNames } from '../actions'
import Question1 from '../components/ChildrenQuestions/Question1'


const mapDispatchToProps = (dispatch) => {
	return {
		onNextClick: (namesArray, firstNamesArray) => {
			dispatch(addChildNames(namesArray, firstNamesArray))
		}
	}
}

const Question1Container = connect(
	null,
	mapDispatchToProps
	)(Question1)

export default Question1Container