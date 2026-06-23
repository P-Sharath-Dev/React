// import "./App.css";
// import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import NavbarModule from "./navbar.module.js";
import WrapperOne from "./components/WrapperOne.js";
import WrapperTwo from "./components/WrapperTwo.js";

function App() {
  return (
    <div className="App">
      {/* <NavbarModule />
      <MovieList /> */}
      <WrapperOne />
      <WrapperTwo />
    </div>
  );
}

export default App;
