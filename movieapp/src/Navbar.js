import { Component } from "react";
import "./navbar.css";
import style from "./navbar.module.css";

export default class Navbar extends Component {
  render() {
    const navbarTitleStyle = {
      color: "rgb(59 165 223)",
      backgroundColor: "rgb(176 31 54)",
    };
    return (
      <>
        {/* <div className="navbar "> */}
        <div className={style.navbar}>
          <div
            //  inline css
            // <h3 style={{ color: "#149782" }}>MovieApp</h3>
            //  css using js Object
            style={navbarTitleStyle}
          >
            <h3>MovieApp</h3>
          </div>
          <div>
            <img src="" alt="cart" />
            <span>0</span>
          </div>
        </div>
      </>
    );
  }
}
