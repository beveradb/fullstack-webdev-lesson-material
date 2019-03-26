import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

// Header is a presentational component which requires a single function to
// be passed in props: "addTodo"
const Header = ({addTodo}) => (
    <header className="header">
        <h1>todo</h1>
        <TodoTextInput
            newTodo
            onSave={(text) => {
                if (text.length !== 0) {
                    addTodo(text)
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>
);

// PropTypes can be used to validate the component has been passed the
// correct pre-bound action creator function at runtime.
Header.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default Header
