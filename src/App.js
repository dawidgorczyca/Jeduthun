import React, { Component } from 'react'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import appReducer from './store/appReducer'
import ListContainer from './containers/ListContainer'

import logo from './logo.svg'
import './App.css'


const store = createStore(
  appReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk))
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