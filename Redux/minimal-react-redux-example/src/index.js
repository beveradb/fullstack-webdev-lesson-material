// Compared to the Redux-only minimal example, we're introducing more elements
// of a modern JavaScript app here. While the previous iteration worked
// directly in the browser without a required build process, there are many
// more things which are only made possible by introducing a build process.
//
// In this example we're using the popular create-react-app (react-scripts)
// package, which uses Webpack & Babel to transpile this code into code
// which is supported by all major browsers.
//
// This means we can use the ES6 "import" syntax to import React, Redux and
// our own Component and Reducer below, from neatly organised sub-folders.

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension';
import Counter from './components/Counter'
import counterReducer from './reducers'

// We are creating the Store by passing in the root reducer function
// defined in a separate file and imported above, and configuring the Redux
// DevTools extension to work using a helper package imported above.
const store = createStore(counterReducer, devToolsEnhancer({trace: true}));

// Since we want to manage the whole DOM of this application with React, we
// select the top-level <div> element we've created to be the container.
const rootDivElementForReactDOM = document.getElementById('root');

// We define a render method which renders the React Component "Counter"
// into the container div selected above.
//
// Every time this render method is called, it is fetching the latest
// version of the state from the Redux store.getState() method and
// passing this into the component's constructor.
//
// We are also passing in two parameters here for the increment / decrement
// functionality used by the component. In this way we are keeping control
// of all Actions used by this component, outside of the component itself.
const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    rootDivElementForReactDOM
);

// Render the component when it first loads, otherwise we'll have a blank page!
render();

// Finally, tell Redux to call our render method whenever the state changes
store.subscribe(render);
