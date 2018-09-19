import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import Header from "./common/Header";
import { sessionReducer } from "./session/sessionReducer";

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
        <h1>Home page</h1>
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
