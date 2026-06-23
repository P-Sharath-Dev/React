// import "./App.css";
// import MovieCard from "./MovieCard";
// import Navbar from "./Navbar";
import MovieList from "./MovieList";
import NavbarModule from "./navbar.module.js";
import { Component } from "react";
import { movies } from "./moviesData.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cartCount: 0,
      // Movies stored in component state
      movies: movies,
    };
  }

  // Increase movie star count
  addStar = (movie) => {
    const { movies } = this.state;

    // Find index of clicked movie
    const movieIndex = movies.indexOf(movie);

    // Increase star only if it is less than 5
    if (movies[movieIndex].star < 5) {
      movies[movieIndex].star += 0.5;

      // Update state
      this.setState({
        movies: movies,
      });
      // console.log("after state update star : ", movies[movieIndex].star);
    }
  };

  // Decrease movie star count
  decreaseStar = (movie) => {
    const { movies } = this.state;

    // Find index of clicked movie
    const movieIndex = movies.indexOf(movie);

    // Decrease star only if it is greater than 0
    if (movies[movieIndex].star > 0) {
      movies[movieIndex].star -= 0.5;

      // Update state
      this.setState({
        movies: movies,
      });
      // console.log("after state update star : ", movies[movieIndex].star);
    }
  };

  // Add or remove movie from cart
  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieIndex = movies.indexOf(movie);

    // Toggle cart value
    movies[movieIndex].isAddedToCart = !movies[movieIndex].isAddedToCart;

    if (movies[movieIndex].isAddedToCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    //update state
    this.setState(
      {
        movies: movies,
        cartCount,
      },
      () => {
        // console.log(
        //   "movies[movieIndex].isAddedToCart : ",
        //   movies[movieIndex].isAddedToCart,
        //   "cartCount : ",
        //   cartCount,
        // );
      },
    );
  };

  // Mark movie as favourite or unfavourite
  handleFavourite = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    // Toggle favourite value
    movies[movieIndex].isFavourte = !movies[movieIndex].isFavourte;
    this.setState(
      {
        movies: movies,
      },
      () => {
        // console.log(
        //   "movies[movieIndex].isFavourte : ",
        //   movies[movieIndex].isFavourte,
        // );
      },
    );
  };

  render() {
    return (
      <div className="App">
        <NavbarModule cartCount={this.state.cartCount} />
        <MovieList
          movies={movies}
          onIncreaseStars={this.addStar}
          onDecreaseStars={this.decreaseStar}
          onClickFavourite={this.handleFavourite}
          onClickAddToCart={this.handleCart}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <NavbarModule />
//       <MovieList />
//     </div>
//   );
// }

// export default App;
