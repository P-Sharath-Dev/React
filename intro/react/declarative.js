const rootDiv = document.getElementById("root");

//  ----------LEGACY(MEANS OLD WAY OF WRITING REACT)---------

// const rootDiv = document.getElementById("root");
// console.log(rootDiv); // we get DOM element

// const reactHeading = React.createElement(
//   "h1",
//   { className: "heading" },
//   "Hello React",
// );
// console.log(reactHeading); // we get object;
// const reactPara = React.createElement(
//   "p",
//   { className: "text" },
//   "Welcome to first React session",
// );
// const reactBtn = React.createElement("button", {
//   className: "btn",
//   children: "learn More.......",
// });
// const reactContainer = React.createElement(
//   "div",
//   { className: "container" },
//   reactHeading,
//   reactPara,
//   reactBtn,
// );
// ReactDOM.createRoot(rootDiv).render(reactContainer);

// ---------Modern Way (called as JSX(JavaScript XML))---------

const content = (
  <div>
    <h1 className="heading">Hello React</h1>
    <p className="text">welcome to your first react session</p>
    <button className="btn">lear more</button>
  </div>
);
ReactDOM.createRoot(rootDiv).render(content);
