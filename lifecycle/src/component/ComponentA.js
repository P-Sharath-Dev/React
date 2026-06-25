import { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  //constructor() is called first implicitly no matter where you put it.(not only in react. in general this is how class works)
  constructor() {
    super();
    this.state = {
      name: "learning lifecycle methods",
    };

    console.log("constructor from component A");
  }

  //rencer
  render() {
    console.log("render method from component A");
    return (
      <>
        <div>
          <h1>Component A : {this.state.name}</h1>
        </div>

        <ComponentB />
      </>
    );
  }

  //getDerivedStateFromProps function
  static getDerivedStateFromProps() {
    console.log("from getDerivedStateFromProps()-component A");
    return null;
  }

  //componentDidMount
  componentDidMount() {
    console.log("from componentDidMount-component A");
  }
}
