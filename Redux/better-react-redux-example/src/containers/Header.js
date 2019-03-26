
// This is a very simple container which uses the react-redux connect()
// method to wrap the Header presentational component from src/components
// with a connection to the store.
import {connect} from 'react-redux'
import Header from '../components/Header'

// Here we're importing the "addTodo" Action Creator function from the
// src/actions subfolder, which in turn depends on the ADD_TODO Type constant
// defined in the src/constants subfolder.
import {addTodo} from '../actions'

// The connect() method can be used in a variety of ways depending on the
// use case: https://react-redux.js.org/api/connect#example-usage
//
// In this example, we're injecting the "addTodo" Action Creator into the
// Header component without subscribing to updates from the store.
export default connect(null, {addTodo})(Header)
