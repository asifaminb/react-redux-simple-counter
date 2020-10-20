// reducer is just a function that recieves state and action and return the state(updated)

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            // concat is a immutable way as it returns a new array , push mutates a array
            return {
                ...state,
                results: state.results.concat({id: Math.random() , value: state.counter})
            }
        case 'DELETE_RESULT':
            // filter is a immutable way as it returns a new array, splice mutates a array
            return {
                ...state,
                results : state.results.filter((result) => result.id !== action.elementId )
            }

        default:
            return state;
    }
}

export default reducer;
