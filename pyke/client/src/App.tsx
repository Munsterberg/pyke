import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import { sessionReducer } from "./session/sessionReducer";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Header from "./common/Header";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  sessionReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Router>
          <Landing path="/" />
          <Dashboard path="/dashboard" />
        </Router>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
