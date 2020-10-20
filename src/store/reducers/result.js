// reducer is just a function that recieves state and action and return the state(updated)

import {DELETE_RESULT, STORE_RESULT} from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch(action.type) {
        case STORE_RESULT:
            // concat is a immutable way as it returns a new array , push mutates a array
            return {
                ...state,
                results: state.results.concat({id: Math.random() , value: action.result})
            }
        case DELETE_RESULT:
            // filter is a immutable way as it returns a new array, splice mutates a array
            return {
                ...state,
                results : state.results.filter((result) => result.id !== action.elementId )
            }

        default:
            return state;
    }
}

export default resultReducer;
