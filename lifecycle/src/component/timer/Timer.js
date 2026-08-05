import { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  //getDerivedStateFromProps function
  static getDerivedStateFromProps() {
    console.log("from getDerivedStateFromProps()");

    return null; //getDerivedStateFromProps should return something else it will give error
  }
  //*********updating phase methods*/
  shouldComponentUpdate(nextProps, nextState) {
    console.log("From shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  //**till here updating phase methods ***/

  //componentDidMount
  componentDidMount() {
    console.log("from componentDidMount");
  }

  //increasing counter....
  handleIncrease = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    console.log("from render ");
    return (
      <>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
        {/* Multiply by 1000 because 1000 means one second*/}
        {/* slice(11, 19) extracts only the HH:MM:SS part
          from the ISO date string. */}
        {/* got this value 1970-01-01T00:00:00:000z for new Date().. */}
        {/* <h2>{new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h2> */}
        {/* for above line i get output as 00:00:00  */}
        {/* <button onClick={this.toggleTimer}>
          {this.state.isTimerOn ? "stop" : "start"}
        </button> */}
        <br />
        <br />
      </>
    );
  }
}
