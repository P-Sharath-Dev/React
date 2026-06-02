import { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      // Movies stored in component state
      movies: [
        {
          title: "SPIDER-MAN : BRAND NEW DAY",
          plot: "Alone and crime-fighting in a New York City that no longer knows his name, Peter Parker has devoted himself to being a full-time Spider-Man. But as the pressure on Spider-Man intensifies, Peter undergoes a surprising physical evolution that threatens his existence.",
          price: 199,
          poster:
            "https://cdn.marvel.com/content/1x/spidermanbrandnewday_online_1080x1350_ninjas_02.jpg",
          rating: 9,
          star: 0,
          isFavourte: false,
          isAddedToCart: false,
        },
        {
          title: "Intersteller",
          plot: "Alone and crime-fighting in a New York City that no longer knows his name, Peter Parker has devoted himself to being a full-time Spider-Man. But as the pressure on Spider-Man intensifies, Peter undergoes a surprising physical evolution that threatens his existence.",
          price: 299,
          poster: "https://m.media-amazon.com/images/I/713qGg4kCzL.jpg",
          rating: 9.5,
          star: 4.5,
          isFavourte: false,
          isAddedToCart: false,
        },
        {
          title: "JohnWick",
          plot: "Alone and crime-fighting in a New York City that no longer knows his name, Peter Parker has devoted himself to being a full-time Spider-Man. But as the pressure on Spider-Man intensifies, Peter undergoes a surprising physical evolution that threatens his existence.",
          price: 89,
          poster:
            "https://i.pinimg.com/736x/60/ca/54/60ca54ef5069ec9cc565dbb0d1b9fd11.jpg",
          rating: 7,
          star: 3,
          isFavourte: false,
          isAddedToCart: false,
        },
      ],
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
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    // Toggle cart value
    movies[movieIndex].isAddedToCart = !movies[movieIndex].isAddedToCart;

    //update state
    this.setState(
      {
        movies: movies,
      },
      () => {
        // console.log(
        //   "movies[movieIndex].isAddedToCart : ",
        //   movies[movieIndex].isAddedToCart,
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
      <>
        {/* Render all movie cards */}
        {this.state.movies.map((movie, index) => {
          // Pass movie data and functions to MovieCard
          return (
            <MovieCard
              key={index}
              movie={movie}
              handleIncreseStar={this.addStar}
              handleDecreaseStar={this.decreaseStar}
              handleFavourite={this.handleFavourite}
              handleCart={this.handleCart}
            />
          );
        })}
      </>
    );
  }
}

// Default values if movie data is not passed
MovieCard.defaultProps = {
  movie: {
    title: "No Title",
    plot: "No Plot Available",
    price: 0,
    poster: "",
    rating: 0,
    star: 0,
    isFavourte: false,
    isAddedToCart: false,
  },
};
