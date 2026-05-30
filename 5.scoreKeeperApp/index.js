//variables
let score = 0;
let wicket = 0;
let runs = "";
const ballsWiseOutput = [];
const commentRef = React.createRef();

const addScore = (num) => {
  runs = num;
  if (wicket < 10) {
    root.render(<App />);
  }
};

const addWicket = () => {
  runs = "W";
  if (wicket < 10) {
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
          return <React.Fragment key={index}>{element}</React.Fragment>;
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

  //pushing runs and comment of that run to array

  // ballsWiseOutput.push( // but this is adding three seperete elements like 4 , '.', 'what a shot!' instead of single element like '4, what a shot!'
  //   <p>
  //     {runs}
  //     {","}
  //     {comment}
  //   </p>,
  // );

  //so using templeta literals
  // ballsWiseOutput.push(<p>{`${runs}, ${comment}`}</p>);
  if (wicket < 10) {
    ballsWiseOutput.unshift(<p>{`${runs}, ${comment}`}</p>); //adds element at the begining of the array
  }

  console.log("ballWiseOutput", ballsWiseOutput);

  //updating the score
  if (wicket < 10) {
    if (runs === "W") {
      wicket += 1;
    } else {
      score += runs;
    }
  }

  //resetting runs and comment
  runs = "";
  commentRef.current.value = "";

  root.render(<App />);
};

//form component
const FormComponent = () => {
  return (
    <>
      <form action=" " onSubmit={HandleSubmitForm}>
        <input type="text" placeholder="runs scored" value={runs}></input>
        <input
          ref={commentRef}
          type="text"
          placeholder="add comment"
          required
        ></input>
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
