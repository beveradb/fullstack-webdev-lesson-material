// Our reducer is pretty simple, as there are only two possible actions,
// either incrementing or decrementing the integer value in our state
export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}
