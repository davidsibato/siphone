// app created by david sibato 15 october 2020
import './main.css';
import React from 'react'
import ReactDom from 'react-dom'

import {createStore} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import { applyMiddleware } from "redux"

import createRootReducer from 'reducers'
import routes from 'routes'


// app created by david sibato 15 october 2020 18:45

const history = createBrowserHistory()
const middlewares =[thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDom.render(
  < Provider store={store}>
    <ConnectedRouter history={history}>
        {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') 
)