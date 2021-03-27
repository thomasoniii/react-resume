import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"

import "./index.css"
import Resume from "./components/Resume"

import reducers from "./reducers"

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Resume />
  </Provider>,
  document.getElementById("root")
)
