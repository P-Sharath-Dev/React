//variables
let score = 0;
let wicket = 0;

//array for storing the score
const ballsWiseOutput = [];

//function for adding
const addScore = (num) => {
  if (wicket < 10) {
    // wickets cant be more than 10
    if (num == 0) {
      ballsWiseOutput.push(".");
    } else {
      ballsWiseOutput.push(num);
    }

    score += num;
    root.render(<App />);
  }
};

//fuction for adding wicket
const addWicket = () => {
  if (wicket < 10) {
    // wickets cant be more than 10

    ballsWiseOutput.push("w");
    wicket += 1;
    root.render(<App />);
  }
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
      <BallsWiseOutput />
    </>
  );
}

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
