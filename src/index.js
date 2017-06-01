import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

import App from './app'

import counterReducer from './counter/reducer'

const reducer = combineReducers({
  counter: counterReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  })
}
