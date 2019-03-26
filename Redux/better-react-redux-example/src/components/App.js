import React from 'react'

// In this app example, we're using the pattern of separating
// presentational components from container components.
//
// It's important to note that this is not mandatory, and there are
// competing schools of thought on the best way to structure a React/Redux
// app; even the Redux author Dan Abramov has recently changed his mind on
// the matter so it's worth doing a bit more research into the pros/cons of
// this layout before blindly copying:
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
// The Hooks feature added to React in 2019 may well be a cleaner solution now.
//
// In this pattern:
// - Container components are concerned with how things work (data fetching,
// state updates). They are aware of Redux state, and are usually generated
// by React Redux.
// - Presentational components are concerned with how things look (markup,
// styles). They are not aware of Redux state, and are written by hand.
// https://redux.js.org/basics/usage-with-react
//
// Here, we're importing two Container components for the rest of our app.
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'

const App = () => (
    <div>
        <Header/>
        <MainSection/>
    </div>
);

export default App
