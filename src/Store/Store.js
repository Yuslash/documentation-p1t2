import { createStore } from 'redux'

const initialState = {
    value : 0
}

const reducer = (state = initialState, action) => 
{
    if (action.type === 'SET_VALUE') {
        return { ...state, value : action.payload}
    }

    return state
}

const store = createStore(reducer)

export default store