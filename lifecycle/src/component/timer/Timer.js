import { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timerIntervalId = null;
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
    console.log("From shouldComponentUpdate : nextprops", nextProps);
    console.log("From shouldComponentUpdate : nextState", nextState);
    console.log("this.state.time", this.state.time); // giving last prevState's time like if time 1 we get 0
    // updating(means rendering) for every five seconds not for every update
    if (
      nextState.time % 5 === 0 ||
      nextProps.isTimerStarted !== this.props.isTimerStarted
    ) {
      return true;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return 5;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    // console.log("componentDidUpdate : prevProps", prevProps);
    // console.log("componentDidUpdate: prevState", prevState);
    // console.log("componentDidUpdate : snapshot", snapshot);
    console.log("____________");

    if (prevProps.isTimerStarted !== this.props.isTimerStarted) {
      if (this.props.isTimerStarted) {
        this.timerIntervalId = setInterval(() => {
          this.setState((prevState) => {
            return { time: prevState.time + 1 };
          });
        }, 1000);
      } else {
        clearInterval(this.timerIntervalId);
      }
    }
  }
  //**till here updating phase methods ***/

  //componentDidMount
  componentDidMount() {
    console.log("from componentDidMount");
  }

  //*****unmounting phase****** */
  componentWillUnmount() {
    console.log("from componentWillUnmount");
    // if (this.state.time === 10) {
    // clearInterval(this.timerIntervalId);
    // }
  }

  render() {
    console.log("from render ");
    return (
      <>
        {/* <h1>Timer </h1> */}

        {/* Multiply by 1000 because 1000 means one second*/}
        {/* slice(11, 19) extracts only the HH:MM:SS part
          from the ISO date string. */}
        {/* got this value 1970-01-01T00:00:00:000z for new Date().. */}
        <h2>{new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h2>
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
