// Define a Reducer to handle actions and modify the state based on actions.
//
// Reducers (reducing functions) are a fundamental concept in functional
// programming, and are not unique to Redux - they exist in raw JavaScript too.
// This article offers a good explanation of what "Reducer" actually means:
// https://medium.com/async-la/a-short-and-sour-guide-to-reducers-b5b54d3bb018
//
// In Redux, all mutations to the state must occur in a reducer.
// Reducers calculate a new state given the previous state and an
// action (object with a "type" property).
// They must be pure functions; functions that always return the exact same
// output for given inputs - so no API calls or "side effects"!
// This is what enables exciting features like hot reloading and time travel.
//
// In this very simple example, there is only one reducer so it is passed
// into the createStore method directly - as such, this is the "root" reducer.
function counterReducer(state, action) {
    if (typeof state === 'undefined') {
        return 0
    }

    // In Redux, an Action is a plain object that represents an intention to
    // change the state. Actions are the only way to get data into the store.
    //
    // Actions are simply objects which must have a "type" field that
    // indicates the type of action being performed - usually a string
    // constant for easy-to-understand logging and debugging. Other than the
    // "type" field, the structure of an action object is up to you!
    //
    // In this minimal example, our "state" is actually just a single integer,
    // and the only actions are to increment or decrement this value.
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

// The Store is an object that holds the entire State of a Redux application,
// which is often a deeply nested object.
// There should only ever be a single store in a Redux app.
//
// To create the store, you must provide it with a function which will act
// as the root reducer, handling actions and modifying the store.
//
// You will likely use these three methods of Store the most:
// - dispatch(action) is the base dispatch function which sends actions to
//   the Store to be handled by a Reducer.
// - getState() returns the current state of the store.
// - subscribe(listener) registers a function to be called on state changes.
//
// Here, we are creating the Store by passing in the root reducer function
// above, but also passing in a second parameter which allows the DevTools
// extension to work. This extension is incredibly valuable and is
// considered essential when building Redux apps - even in a minimal example!
const store = Redux.createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
);

// In this example, we want to update an element on the page whenever the
// state changes. Here, we're selecting the element to update.
const valueElement = document.getElementById('value');

// In order to update the page whenever the state changes, we need to
// create a function which updates the element above with the latest value.
function render() {
    valueElement.innerHTML = store.getState().toString()
}

// Now we have a function to update (or, "render") the page with the
// latest value in the State, we need to "subscribe" to update events from
// the Store by passing this function into the Store's subscribe method.
store.subscribe(render);

// Now we have a Store to contain our application State, a Reducer to
// update the State when Actions occur, and a Render function which will
// update an element on the page whenever the state changes.
// The only thing left is something to actually trigger those actions!
//
// Here, we create click event handlers on the buttons which each dispatch
// (as in, "send off to a destination") an action to the Store.
//
// Each call to store.dispatch() in this simple example is simply creating the
// Action (object with "type" property) to dispatch on the fly, but in more
// complex applications these Actions would usually
document.getElementById('increment')
    .addEventListener('click', function incrementClick() {
        store.dispatch({type: 'INCREMENT'})
    });

document.getElementById('decrement')
    .addEventListener('click', function decrementClick() {
        store.dispatch({type: 'DECREMENT'})
    });

document.getElementById('incrementIfOdd')
    .addEventListener('click', function incrementIfOddClick() {
        if (store.getState() % 2 !== 0) {
            store.dispatch({type: 'INCREMENT'})
        }
    });

document.getElementById('incrementIn3s')
    .addEventListener('click', function incrementIn3sClick() {
        setTimeout(function incrementIn3sTimeout() {
            store.dispatch({type: 'INCREMENT'})
        }, 3000)
    });