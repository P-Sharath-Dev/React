import { Component } from "react";
import "./WrapperOne.css";
import styles from "./WrapperOne.module.css";

export default class WrapperOne extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>This is my heading</h1>
        </div>
        <div>
          <button className={styles.btn}>click me</button>
        </div>
      </div>
    );
  }
}
