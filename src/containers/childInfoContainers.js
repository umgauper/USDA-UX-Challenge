import React from 'react'
import { connect } from 'react-redux'
import { updateChildInfo } from '../actions'
import Question3 from '../components/ChildrenQuestions/Question3'
import Question4 from '../components/ChildrenQuestions/Question4'
import Question5 from '../components/ChildrenQuestions/Question5'
import Question6 from '../components/ChildrenQuestions/Question6'

import ChildInfoQuestion from '../components/ChildrenQuestions/ChildInfoQuestion'

const mapStateToProps = (state) => {
	return {
		names: state.appState.firstNamesArray
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChildInfoClick: (childInfo, index) => {
			dispatch(updateChildInfo(childInfo, index))
		}
	}

}


export const Question3Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question3)

export const Question4Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question4)

export const Question5Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question5)

export const Question6Container = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Question6)

