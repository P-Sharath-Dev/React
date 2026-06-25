import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <style>
      {`
        html, body, #root {
          height: 100%;
          margin: 0;
          background-color: black;
          color: white;
        }
      `}
    </style>
    <App />
  </>,
);
