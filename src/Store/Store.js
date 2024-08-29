import { createStore } from 'redux'
import blogs from '../blogs.json'

const firstBlog = blogs[0].name
const titletBlog = blogs[0].title
const contentBlog = blogs[0].content

const initialState = {

    name : firstBlog,
    title : titletBlog,
    content : contentBlog
}

const reducer = (state = initialState, action) => 
{
    switch (action.type) {
        case 'SET_VALUE':
            return { ...state, value: action.payload}
        default:
            return state
        }
}

const store = createStore(reducer)

export default store