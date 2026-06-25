import { Component } from "react";

export default class ComponentB extends Component {
  //constructor() is called first implicitly no matter where you put it.(not only in react. in general this is how class works)
  constructor() {
    super();
    this.state = {
      name: "learning lifecycle methodsss",
    };

    console.log("constructor from component B");
  }

  //rencer
  render() {
    console.log("render method from component B");
    return (
      <>
        <div>
          <h3>Component B : {this.state.name}</h3>
        </div>
      </>
    );
  }

  //getDerivedStateFromProps function
  static getDerivedStateFromProps() {
    console.log("from getDerivedStateFromProps()-component B");
    return null;
  }

  //componentDidMount
  componentDidMount() {
    console.log("from componentDidMount-component B");
  }
}
