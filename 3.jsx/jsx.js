function App() {
  function sum(a, b) {
    return a + b;
  }
  const name = "John";
  const rollNo = 30;
  const boolValue = true; //will not print in output so convert to string to see it in the output.
  const middleName = null; //will not print in output in output so convert to string to see it in the output.
  const lastName = undefined; //will not print in output in output so convert to string to see it in the output.
  //array
  const arr = [1, 2, 3, 4, 5, 6];

  {
    /* using filter() to print event elements of the array */
  }
  const evenArr = arr.filter((num) => {
    if (num % 2 == 0) {
      return num;
    }
  });

  const student = {
    name: "John",
    age: 20,
    rollNo: 38,
    address: "Hyd",
  };

  const students = ["ram", "vishnu", "stark", "banner", "thor", "steve"];

  const studentTable = [
    {
      name: "thor",
      age: 20,
      rollNo: 38,
      address: "Hyd",
    },
    {
      name: "stark",
      age: 23,
      rollNo: 28,
      address: "delhi",
    },
    {
      name: "ram",
      age: 21,
      rollNo: 32,
      address: "mumbai",
    },
    {
      name: "vishnu",
      age: 21,
      rollNo: 39,
      address: "pune",
    },
    {
      name: "steve",
      age: 21,
      rollNo: 32,
      address: "kashmir",
    },
  ];

  return (
    <>
      <h1>
        Name : {name}-{sum(5, 6)}
        {/* output:-   Name : John-11 */}
      </h1>

      {/*using map() to print array*/}
      <h3>
        Array <span>using map</span> :
        {arr.map((num, index) => {
          return <p key={index}>{num}</p>;
        })}
      </h3>

      {/* using filter() to print event elements of the array */}

      <h3>
        Array <span>using fiter</span> :{" "}
        {evenArr.map(
          (
            num,
            index, //using map to print the evenArr
          ) => (
            <p key={index}>{num}</p>
          ),
        )}
      </h3>

      {/* using object */}

      {/* <h3>{student}</h3> //we cannot use Obj directly. but we can access them. */}
      <h2>Using OBJECT</h2>
      <h3>{student.name}</h3>
      <h3>{student["rollNo"]}</h3>
      <h3>{student["age"]}</h3>
      <h3>{student.address}</h3>

      {/* using list  */}
      <h2>Using list</h2>
      <ol>
        {students.map((student, index) => {
          return <li key={index}>{student}</li>;
        })}
      </ol>

      <p>RollNo : {rollNo}</p>
      <p>boolValue : {String(boolValue)}</p>
      <p>middleName : {String(middleName)}</p>
      <p>lastName : {String(lastName)}</p>

      {/* table */}
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>rollNo</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {studentTable.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />); //createRoot is used to create a Root Element
