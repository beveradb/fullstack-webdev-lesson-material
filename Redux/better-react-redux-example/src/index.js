import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

const store = createStore(reducer, devToolsEnhancer({trace: true}));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
