import { ADD_CHILD_NAMES, UPDATE_CHILD_INFO, ADD_ADULT_NAMES, UPDATE_ADULT_INFO, UPDATE_CASE_NUMBER, UPDATE_CONTACT_INFO, UPDATE_SSN } from '../actions'
import { combineReducers } from 'redux'
import update from 'react-addons-update'

const initialState = {
	namesArray: [],
	firstNamesArray: [],
	adultNamesArray: [],
	adultFirstNamesArray: [],
	caseNumber: null,
	SSN: null,
	contactInfo: {
		aptNumber: '',
		city: '',
		state: '',
		zip: null,
		date: '',
		name: '',
		phone: null,
		email: ''
	}
}

const appState = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHILD_NAMES:
			return update(state, {
				namesArray: { 
					$set: Array.prototype.concat(state.namesArray, action.namesArray) 
				},
				firstNamesArray: { 
					$set: Array.prototype.concat(state.firstNamesArray, action.firstNamesArray) 
				}
			})

		case UPDATE_CHILD_INFO: //TODO: refactor Object.assign to use upate syntax
			return update(state, {
				namesArray: {
					$set: [...state.namesArray.slice(0, action.index), 
								Object.assign({}, state.namesArray[action.index], action.childInfo),
								...state.namesArray.slice(action.index + 1)]
				}
			})

		case ADD_ADULT_NAMES: 
			return update(state, {
				adultNamesArray: { 
					$set: Array.prototype.concat(state.adultNamesArray, action.namesArray) 
				},
				adultFirstNamesArray: { 
					$set: Array.prototype.concat(state.adultFirstNamesArray, action.firstNamesArray) 
				}
			})


		case UPDATE_ADULT_INFO: 
			return update(state, {
				adultNamesArray: {
					$set: [...state.adultNamesArray.slice(0, action.index), 
								Object.assign({}, state.adultNamesArray[action.index], action.adultInfo),
								...state.adultNamesArray.slice(action.index + 1)]
				}
			})

		case UPDATE_CASE_NUMBER:
			return update(state, {
				caseNumber: {
					$set: action.caseNumber
				}
			})

		case UPDATE_CONTACT_INFO:
			return update(state, {$merge: action.contactInfo})

		case UPDATE_SSN:
			return update(state, {$merge: action.ssnObj})
				
		default:
			return state
	}

}


const usdaApp = combineReducers({
	appState
})

export default usdaApp;

/*
childname = {
	namesArray: [
		{first: '',
			MI: '',
		  last:	'',
		  id: NUM,
		  isStudent: bool
		}
	]
}
*/