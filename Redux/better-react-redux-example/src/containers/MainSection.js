import {connect} from 'react-redux'
import * as TodoActions from '../actions'
import {bindActionCreators} from 'redux'
import MainSection from '../components/MainSection'
import {getCompletedTodoCount} from '../selectors'

// mapStateToProps - the first parameter passed in to connect() - is used
// for selecting the part of the store data that the connected component needs.
//
// It is called every time the store state changes, so must be fast.
// It receives the entire store state, and should return an object of data
// this component needs. That data is then provided to the component as props.
// Much like a Redux reducer, a mapStateToProps function should always be
// 100% pure and synchronous, and not be used to trigger asynchronous behavior.
//
// In the simplest use case, mapStateToProps simply returns a slice of the
// store (e.g. return state.someSlice). However, it should also be used to
// combine pieces of data from different parts of the state tree, and
// transform the data to enable clean, readable use in the component.
//
// Functions which extract & transform data from the store are referred to
// as "Selectors", and should be extracted out to a src/selectors subfolder.
//
// In this simple example, our component only needs two integers to show
// the total and completed numbers of list items, but as the completed
// value is calculated, we've extracted it out to a Selector function.
const mapStateToProps = state => ({
    todosCount: state.todos.length,
    completedCount: getCompletedTodoCount(state)
});

// Defining mapDispatchToProps as a function like this gives you the most
// flexibility in customizing the functions your component receives, and
// how they dispatch actions. Further detail and examples:
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
//
// In this case, we're simply binding all Action Creators to dispatch, but
// doing this in a function rather than using the “object shorthand” form
// allows us to pass all of the actions to the component inside a single
// property called "actions", which makes for slightly more readable code
// in the component itself.
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection)

