// reducer is just a function that recieves state and action and return the state(updated)

import {ADD, DECREMENT, INCREMENT, SUBSTRACT} from '../actions';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        default:
            return state;
    }
}

export default counterReducer;
