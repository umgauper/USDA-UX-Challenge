/*
 * action types
 */

export const ADD_CHILD_NAMES = 'ADD_CHILD_NAMES';

/*
 * action creators
 */
 
export const addChildNames = (namesArray) => {
	return {
		type: 'ADD_CHILD_NAMES',
		namesArray: namesArray
	}
}

