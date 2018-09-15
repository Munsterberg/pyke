import React from "react";
import { render } from "react-dom";
import Header from "./components/common/Header";

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

render(<App />, document.getElementById("app"));
