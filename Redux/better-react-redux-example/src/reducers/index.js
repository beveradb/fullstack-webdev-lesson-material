import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// The combineReducers helper function turns an object whose values are
// different reducing functions into a single reducing function you can
// pass to createStore.
//
// A popular convention is to name reducers after the state slices they
// manage, so you can use ES6 property shorthand notation like so:
const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default rootReducer
