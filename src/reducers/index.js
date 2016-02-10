import { ADD_CHILD_NAMES, UPDATE_CHILD_INFO } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
	namesArray: []
}

const appState = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHILD_NAMES:
			return Object.assign({}, state, {namesArray: Array.concat(state.namesArray, action.namesArray)})
		case UPDATE_CHILD_INFO: //change to UPDATE student info, action creator should take 'isStudent', 'isMigrant', as argument
			return 	Object.assign({}, state, {namesArray: [...state.namesArray.slice(0, action.index), 
								Object.assign({}, state.namesArray[action.index], action.childInfo),
								...state.namesArray.slice(action.index + 1)]
								})

				
		default:
			return state
	}

}

//var newState = Object.assign({}, childname, 
	// {namesArray : [...childname.namesArray.slice(0, 1), 
		// Object.assign({}, childname.namesArray[1], { isStudent: true}), ...childname.namesArray.slice(1+1)] }) 

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