
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
// into the createStore method directly.
function reduxReducer(state, action) {
    if (typeof state === 'undefined') {
        return 0
    }

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const store = Redux.createStore(
    reduxReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
);

const valueEl = document.getElementById('value');

function render() {
    valueEl.innerHTML = store.getState().toString()
}

render();
store.subscribe(render);

// Create click event handlers on buttons to dispatch actions
document.getElementById('increment')
    .addEventListener('click', function () {
        store.dispatch({type: 'INCREMENT'})
    });

document.getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch({type: 'DECREMENT'})
    });

document.getElementById('incrementIfOdd')
    .addEventListener('click', function () {
        if (store.getState() % 2 !== 0) {
            store.dispatch({type: 'INCREMENT'})
        }
    });

document.getElementById('incrementAsync')
    .addEventListener('click', function () {
        setTimeout(function () {
            store.dispatch({type: 'INCREMENT'})
        }, 3000)
    });