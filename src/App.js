import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './store/appReducer'
import ListContainer from './containers/listContainer'

import logo from './logo.svg'
import './App.css'

const store = (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore) : createStore)(appReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListContainer/>
      </Provider>
    );
  }
}

export default App