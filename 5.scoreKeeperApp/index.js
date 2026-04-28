//variables
let score = 0;
let wicket = 0;
let runs = 0;
const ballsWiseOutput = [];
const commentRef = React.createRef();

const addScore = (num) => {
  runs = num;
  if (wicket < 10) {
    // wickets cant be more than 10
    // if (num == 0) {
    //   ballsWiseOutput.push(".");
    // } else {
    //   ballsWiseOutput.push(num);
    // }

    score += num;
    root.render(<App />);
  }
};

const addWicket = () => {
  runs = "W";
  if (wicket < 10) {
    // wickets cant be more than 10

    // ballsWiseOutput.push("w");
    wicket += 1;
    root.render(<App />);
  }
};

//Button component
const Button = () => {
  return (
    <>
      <button onClick={() => addScore(0)}>0</button>
      <button onClick={() => addScore(1)}>1</button>
      <button onClick={() => addScore(2)}>2</button>
      <button onClick={() => addScore(3)}>3</button>
      <button onClick={() => addScore(4)}>4</button>
      <button onClick={() => addScore(5)}>5</button>
      <button onClick={() => addScore(6)}>6</button>
      <button onClick={addWicket}>Wicket</button>
    </>
  );
};

//BallsWiseOutput component
const BallsWiseOutput = () => {
  return (
    <div>
      <h4>
        {ballsWiseOutput.map((element, index) => {
          //&ensp for two spaces
          return (
            <React.Fragment key={index}>
              {index % 6 == 0 ? <br></br> : null}
              {element == "." ? (
                <strong>{element}</strong>
              ) : (
                <span>{element} &ensp;</span>
              )}
            </React.Fragment>
          );
        })}
      </h4>
    </div>
  );
};

//HandleSubmitForm component
const HandleSubmitForm = (event) => {
  event.preventDefault(); // this will not reload the page on submit

  //getting the comment from input
  console.log("comment ", commentRef.current); // we get input field
  console.log("comment ", commentRef.current.value); // we get value from the input field
  const comment = commentRef.current.value;

  //pushing runs to array
  ballsWiseOutput.push(runs);
  console.log("ballWiseOutput", ballsWiseOutput);
};

//form component
const FormComponent = () => {
  return (
    <>
      <form action=" " onSubmit={HandleSubmitForm}>
        <input type="text" placeholder="runs scored" value={runs}></input>
        <input ref={commentRef} type="text" placeholder="add comment"></input>
        <button>submit</button>
      </form>
    </>
  );
};

//App component
function App() {
  return (
    <>
      <h1>Score Keeper App</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <Button />
      <hr></hr>
      <FormComponent />
      <BallsWiseOutput />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
