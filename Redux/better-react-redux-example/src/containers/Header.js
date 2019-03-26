
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
// In this example, we're using only the second argument of connect,
// mapDispatchToProps, to inject the "addTodo" Action Creator into the
// Header component without subscribing to updates from the store.
//
// In general, mapDispatchToProps lets you create functions that dispatch
// when called, and pass those functions as props to your component.
//
// This usage of mapDispatchToProps is the "object shorthand" form, which
// automates a lot of what you would otherwise need to configure with the
// function form, such as calling bindActionCreators for you.
//
// bindActionCreators turns an object whose values are action creators,
// into an object with the same keys, but with every action creator wrapped
// into a dispatch call so they may be invoked directly.
//
// In general, you should always use the “object shorthand” form of
// mapDispatchToProps, unless you have a specific reason to customize the
// dispatching behavior.
//
// There is far more detail and examples in the React Redux docs:
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
export default connect(null, {addTodo})(Header)
