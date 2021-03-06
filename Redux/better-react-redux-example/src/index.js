import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'

// Compared to the previous minimal example, this import represents a
// significant change - we are now using the official React-Redux binding
// to give our React components access to the store, rather than working
// purely with props and callback functions.
//
// The react-redux library provides <Provider />, which makes the store
// available to any components nested inside it through the connect() method.
// <Provider /> is a higher-order component (HOC): an advanced technique
// for reusing component logic, and is aware of the store's state.
//
// Most projects wrap the entire app's component tree in it, as we see below.
import {Provider} from 'react-redux'

import App from './components/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

// The reducer we're passing into our Store here is what is typically
// called the "root reducer", as it is using combineReducers to combine
// multiple reducers into one which calls the relevant reducer for each
// part of the state.
const store = createStore(reducer, devToolsEnhancer({trace: true}));

render(
    // The react-redux <Provider /> takes your Redux store as a property
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
