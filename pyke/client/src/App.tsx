import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  public render() {
    return <div>ok</div>;
  }
}

render(<App />, document.getElementById("app"));