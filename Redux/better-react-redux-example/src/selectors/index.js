
// Here, we're using the widely used "reselect" library to create Memoized
// Selectors - this means the return value of these function is cached based
// on its parameters, which is key to improving performance when they are
// called repeatedly due to the Redux state updating.
//
// There is lots more detail and examples here:
// https://redux.js.org/recipes/computing-derived-data
// and in the Reselect documentation:
// https://github.com/reduxjs/reselect#faq
import {createSelector} from 'reselect'
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from '../constants/TodoFilters'

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case SHOW_ALL:
                return todos;
            case SHOW_COMPLETED:
                return todos.filter(t => t.completed);
            case SHOW_ACTIVE:
                return todos.filter(t => !t.completed);
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
);

export const getCompletedTodoCount = createSelector(
    [getTodos],
    todos => (
        todos.reduce((count, todo) =>
                todo.completed ? count + 1 : count,
            0
        )
    )
);