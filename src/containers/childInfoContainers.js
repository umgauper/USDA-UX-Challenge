import React from 'react'
import { connect } from 'react-redux'
import { updateIsStudent, updateIsFoster, updateIsMigrant, updateIsHeadStart } from '../actions'
import Question3 from '../components/ChildrenQuestions/Question3'
import Question4 from '../components/ChildrenQuestions/Question4'
import Question5 from '../components/ChildrenQuestions/Question5'
import Question6 from '../components/ChildrenQuestions/Question6'

import ChildInfoQuestion from '../components/ChildrenQuestions/ChildInfoQuestion'

const mapStateToProps = (state) => {
	return {
		names: state.appState.namesArray,
		store: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onYesClickStudent: (index) => {
			dispatch(updateIsStudent(index, true))
		},
		onNoClickStudent: (index) => {
			dispatch(updateIsStudent(index, false))
		},
		onYesClickFoster: (index) => {
			dispatch(updateIsFoster(index, true))
		},
		onNoClickFoster: (index) => {
			dispatch(updateIsFoster(index, false))
		},
		onYesClickMigrant: (index) => {
			dispatch(updateIsMigrant(index, true))
		},
		onNoClickMigrant: (index) => {
			dispatch(updateIsMigrant(index, false))
		},
		onYesClickHeadStart: (index) => {
			dispatch(updateIsHeadStart(index, true))
		},
		onNoClickHeadStart: (index) => {
			dispatch(updateIsHeadStart(index, false))
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

