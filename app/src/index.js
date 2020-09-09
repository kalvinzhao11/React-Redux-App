import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider}  from 'react-redux'
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import reducer from "./store/reducers";


const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
