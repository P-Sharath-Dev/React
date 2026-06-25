import { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  //constructor() is called first implicitly no matter where you put it.(not only in react. in general this is how class works)
  constructor() {
    super();
    this.state = {
      name: "learning lifecycle methods",
      usersData: [],
    };

    console.log("constructor from component A");
  }

  //getDerivedStateFromProps function
  static getDerivedStateFromProps() {
    console.log("from getDerivedStateFromProps()-component A");
    return null;
  }

  //componentDidMount
  componentDidMount() {
    console.log("from componentDidMount-component A");

    //************using fetch for side effect*************
    // Send a GET request.
    fetch("https://jsonplaceholder.typicode.com/users")
      // The response data is not readable, so converting it into a JavaScript object using .json().
      .then((response) => response.json())

      // Receive the JavaScript users data and print it to the console.
      // .then((users) => console.log(users))

      //storing data in usersData array inside this.state()
      .then((users) =>
        this.setState({ usersData: users }, () =>
          console.log("users data from this.state", this.state.usersData),
        ),
      );
  }

  //render
  render() {
    console.log("render method from component A");

    return (
      <>
        <div>
          <h1>Component A : {this.state.name}</h1>
        </div>

        <ol>
          {this.state.usersData.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ol>
        <ComponentB />
      </>
    );
  }
}
