import { Component } from "react";
// import ComponentA from "../src/component/ComponentA.js";
import Timer from "./component/timer/Timer.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMounted: true, // for showing the text in button ---> show timer/ hide timer
      isTimerStarted: false,
    };
  }

  handleTImerMount = () => {
    this.setState({
      isMounted: !this.state.isMounted,
    });
  };

  //event for showing or hiding text in button(show timer / hide timer)
  // toggling time on and off
  handleToggleTimer = () => {
    this.setState({
      isTimerStarted: !this.state.isTimerStarted,
    });
  };

  render() {
    return (
      <>
        {/* <ComponentA /> */}
        <h1>Timer-App</h1>

        <button onClick={this.handleTImerMount}>
          {this.state.isMounted ? "hide timer" : "show timer"}
        </button>
        {/* isMounted = true ? Render <Timer /> : Render nothing */}
        {this.state.isMounted ? (
          <Timer isTimerStarted={this.state.isTimerStarted} />
        ) : null}
        <br></br>

        <button onClick={this.handleToggleTimer}>
          {this.state.isTimerStarted ? "stop" : "start"}
        </button>
      </>
    );
  }
}

export default App;
