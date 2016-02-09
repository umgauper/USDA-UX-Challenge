import { ADD_CHILD_NAMES } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
	namesArray: []
}

const childname = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHILD_NAMES:
			return Object.assign({}, state, {namesArray: Array.concat(state.namesArray, action.namesArray)})
		default:
			return state
	}

}

const usdaApp = combineReducers({
	childname: childname
})

export default usdaApp;