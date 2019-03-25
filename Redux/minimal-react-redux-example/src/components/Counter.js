import React, {Component} from 'react'

// PropTypes validates types at runtime - see bottom of the file.
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        // "props" here is an arbitrary object containing properties passed
        // into an instance of this component.
        // When React sees a a user-defined component element, it passes JSX
        // attributes to this component as a single object - "props".
        //
        // As such, when this component is instantiated by the render
        // method in our index.js file, props is an object containing
        // properties "value", "onIncrement" & "onDecrement".

        // Components should always call the base constructor, passing in
        // props. This allows you to reference them with "this.props".
        super(props);

        // In order to be able to use "this" and access state etc. in
        // action functions, we have to explicitly bind them here.
        // The bind() method creates a new function that, when called, has
        // its "this" keyword set to the provided value.
        // The reason we need to do this is explained well, in detail, here:
        // https://medium.com/p/f7ea1a6f93eb/
        this.incrementIn3s = this.incrementIn3s.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    // Define click handler functions to apply logic before calling the
    // passed-in increment / decrement methods.
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementIn3s() {
        setTimeout(this.props.onIncrement, 3000)
    }

    render() {
        // this.props is an object containing properties as passed in by
        // the JSX in the render method in our index.js file, so this just
        // saves a few repetitions of "this.props" below for cleaner code.
        const {value, onIncrement, onDecrement} = this.props;

        // Our render method returns the actual HTML which should be output
        // in the top-level DOM element we're using as the React container.
        //
        // As this is JSX, we can use templates for the current value from
        // the state, and the click handler action methods.
        return (
            <div>
                <h1>Minimal React + Redux example</h1>
                <p>
                    Counter: {value} clicks
                </p>
                <p>
                    <button onClick={onIncrement}> + </button>
                    <button onClick={onDecrement}> - </button>
                </p>
                <p>
                    <button onClick={this.incrementIfOdd}>
                        Increment if odd
                    </button>
                    <button onClick={this.incrementIn3s}>
                        Increment in 3s
                    </button>
                </p>
            </div>
        )
    }
}

// PropTypes validates types at runtime, ensuring that this Component was
// called with properties which match the expected types - helping avoid
// some nasty bugs! Note, this doesn't check types at compile time - for
// that, you'd need to use TypeScript.
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

// The "export" statement allows this component to be used from other modules
// with the import statement, referenced by the name specified.
export default Counter
