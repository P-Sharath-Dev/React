import { Component } from "react";
// import ComponentA from "../src/component/ComponentA.js";
import Timer from "./component/timer/Timer.js";

class App extends Component {
  constructor() {
    super();
  }

  //event for showing or hiding text in button(show timer / hide timer)

  // toggling time on and off

  render() {
    return (
      <>
        {/* <ComponentA /> */}
        <h1>Timer-App</h1>
        <Timer />
      </>
    );
  }
}

export default App;
