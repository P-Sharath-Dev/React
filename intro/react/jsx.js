console.log("hello from jsx-js");

const rootDiv = document.getElementById("root");

// const jsxContent = (
//   <React.Fragment>
//     <h1>Hello</h1> <p>enjoy coding</p>
//   </React.Fragment>
// );
const jsxContent = //react fragment
  (
    <React.Fragment>
      {/* <div> */}
      <h1 className="heading">Hello React</h1>
      <p className="text">welcome to your first react session</p>
      <button className="btn">lear more</button>
      {/* </div> */}
      <h1>THis is another H1element</h1>
    </React.Fragment>
  );

const course = "React";
const jsxContent2 = // empty fragment
  (
    <>
      <h1>course name is {course}</h1>
      <p>welcome to {course}.</p>
    </>
  );

//React component
function App() {
  return (
    <>
      <h1>course name is {course}</h1>
      <p>welcome to {course}.</p>
      <p>from APP conponent-functional</p>
    </>
  );
}

//component using arrow functions
const Name = () => <h3>Coding Ninjas</h3>;

//ReactDOM.createRoot(rootDiv).render(jsxContent);
// ReactDOM.createRoot(rootDiv).render(jsxContent2);
// ReactDOM.createRoot(rootDiv).render(App());
ReactDOM.createRoot(rootDiv).render(
  <>
    <App />
    <Name />
  </>,
); //check in component tab(react developer tools) in dev tools
