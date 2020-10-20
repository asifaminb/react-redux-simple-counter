// reducer is just a function that recieves state and action and return the state(updated)

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD'){
        return {
            counter: state.counter + action.val
        }
    }
    if(action.type === 'SUBSTRACT'){
        return {
            counter: state.counter - action.val
        }
    }
    return state;
}

export default reducer;
