import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementIn3s = this.incrementIn3s.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementIn3s() {
        setTimeout(this.props.onIncrement, 3000)
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <h1>Minimal React + Redux example</h1>
                <p>
                    Counter: {value} clicks
                </p>
                <p>
                    <button onClick={onIncrement}>
                        +
                    </button>
                    {' '}
                    <button onClick={onDecrement}>
                        -
                    </button>
                </p>
                <p>
                    <button onClick={this.incrementIfOdd}>
                        Increment if odd
                    </button>
                    {' '}
                    <button onClick={this.incrementIn3s}>
                        Increment in 3s
                    </button>
                </p>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter
