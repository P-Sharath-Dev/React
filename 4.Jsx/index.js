const rootElement = document.getElementById("root");
const jsx = <h1>Hello jsx</h1>;
const jsx2 = <h1 className="red">Hello JSX</h1>;

ReactDOM.createRoot(rootElement).render(<App />);

//component Table
function FavCarTable() {
  const FavCars = [
    {
      id: 1,
      name: "chetak",
      brand: "ford",
      model: "mustang gt",
      color: "red",
    },
    {
      id: 2,
      name: "satyam",
      brand: "honda",
      model: "amaze",
      color: "grey",
    },
    {
      id: 3,
      name: "anubav",
      brand: "MG ",
      model: "hector",
      color: "black",
    },
    {
      id: 11,
      name: "prashant",
      brand: "bently ",
      model: "mussan ewb",
      color: "black",
    },
    {
      id: 19,
      name: "piyush",
      brand: "Lanborgini ",
      model: "urus",
      color: "black",
    },
    {
      id: 7,
      name: "varun",
      brand: "tata",
      model: "safari",
      color: "black",
    },
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>User Name</th>
          <th>Brand Name</th>
          <th>Model</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {FavCars.map((favCar, i) => {
          return (
            <tr key={favCar.id}>
              <td>{favCar.name}</td>
              <td>{favCar.brand}</td>
              <td>{favCar.model}</td>
              <td>{favCar.color}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

//component App
function App() {
  //---------------Conditional rendering : IF ELSE---------\
  //   const isLoggedIn = true;
  //   const userName = "John";
  //   if (isLoggedIn && userName) {
  //     return <h1>Hello {userName}. Welcome</h1>;
  //   } else if (isLoggedIn) {
  //     return <h1>Hello User. Welcome </h1>;
  //   } else {
  //     return <h1>Please Login</h1>;
  //   }

  //---------------Conditional rendering : IF ELSE---------\
  //   const isStudent = false;
  //   if (isStudent) {
  //     return <StudentTable></StudentTable>;
  //   }
  //   return <FavCarTable></FavCarTable>;

  //   //---------------Conditional rendering : TERNARY OPERATOR---------\
  //   const isStudent = true;
  //   return isStudent ? (
  //     <StudentTable></StudentTable>
  //   ) : (
  //     <FavCarTable></FavCarTable>
  //   );

  //---------------Conditional rendering : AND OPERATOR (&&)---------\
  //   const isStudent = true;
  //   const isUserLoggedIn = true;
  //   return isUserLoggedIn && isStudent && <StudentTable></StudentTable>;

  //---------------Conditional rendering : OR OPERATOR (||)---------\
  const isStudent = false;
  const isUserLoggedIn = true;
  //   return isUserLoggedIn || isStudent || <StudentTable></StudentTable>; //no output
  return (isUserLoggedIn || isStudent) && <StudentTable></StudentTable>;

  //   return (
  //     <>
  //       <h1>User's Favourite Cars</h1>
  //       <FavCarTable />
  //     </>
  //   );
}

function StudentTable() {
  const studentTable = [
    {
      name: "thor",
      age: 20,
      rollNo: 38,
      marks: 30,
    },
    {
      name: "stark",
      age: 23,
      rollNo: 28,
      marks: 39,
    },
    {
      name: "ram",
      age: 21,
      rollNo: 32,
      marks: 46,
    },
    {
      name: "vishnu",
      age: 21,
      rollNo: 39,
      marks: 45,
    },
    {
      name: "steve",
      age: 21,
      rollNo: 32,
      marks: 48,
    },
  ];

  return (
    <>
      {/* table */}
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>rollNo</th>
            <th>marks</th>
          </tr>
        </thead>
        <tbody>
          {studentTable.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.marks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
