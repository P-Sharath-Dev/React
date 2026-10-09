import { Component } from "react";
import ComponentA from "../src/component/ComponentA.js";
import Timer from "./component/timer/Timer.js";
import ErrorBoundary from "./component/ErrorBoundary.js";
import ComponentB from "./component/ComponentB.js";

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
