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

  //increase count handler
  handleIncrease = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    console.log("from render ");
    return (
      <>
        {/* <h1>Timer</h1> */}
        <h1>counter : {this.state.count}</h1>
        <button onClick={this.handleIncrease}>increase</button>
      </>
    );
  }
}
