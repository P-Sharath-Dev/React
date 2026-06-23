import { Component } from "react";
import "./WrapperTwo.css";

export default class WrapperTwo extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>This is my heading</h1>
        </div>
        <div>
          <button className="btn">click me</button>
        </div>
      </div>
    );
  }
}
