import { Component } from "react";
import "./navbar.css";
// import style from "./navbar.module.css";
import styled from "styled-components";

// ***component for navbar***
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  height: 8vh;
  //if color is not provided in tag then cyan is added
  color: ${(props) => props.color || "cyan"};
  position: relative;
  align-items: center;
`;

// ***component for title***
const Title = styled.div`
  font-size: 25px;
  color: white;
  font-weight: 700;
  font-family: "Times new Roman", Times, Serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: green;
  }
  // dynamic using props
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

//***component for cart image***
const CartImg = styled.img`
  height: 30px;
  margin-right: 35px;
`;

//***component for carticon container***
const CartItemContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

//***component for cart count***
const CartCount = styled.div`
  background: yellow;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 0px;
  top: 8px;
  font-size: 12px;
`;

export default class Navbar extends Component {
  render() {
    //this object contains all the classes we use for styling the navbar
    // const navebarStyle = {
    //   navTitle: {
    //     //this is a class
    //     color: "rgb(59 165 223)",
    //     backgroundColor: "rgb(211, 101, 120)",
    //   },
    // };

    return (
      <>
        {/* ******Styled Component************* */}
        <Nav color="yellow">
          <Title show={true}>MovieApp</Title>
          <CartItemContainer>
            <CartImg
              src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
              alt="cart"
            />
            <CartCount>0</CartCount>
          </CartItemContainer>
        </Nav>
        {/* <div className="navbar "> */}

        {/* <div className={style.navbar}>
          <div
          //  inline css
          // <h3 style={{ color: "#149782" }}>MovieApp</h3>
          //  css using js Object
          // style={navebarStyle.navTitle}
          >
            <h3>MovieApp</h3>
          </div>
          <div>
            <img src="" alt="cart" />
            <span>0</span>
          </div>
        </div> */}
      </>
    );
  }
}
