import { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  render() {
    const {
      movies,
      onIncreaseStars,
      onDecreaseStars,
      onClickFavourite,
      onClickAddToCart,
    } = this.props;
    return (
      <>
        {/* Render all movie cards */}
        {movies.map((movie, index) => {
          // Pass movie data and functions to MovieCard
          return (
            <MovieCard
              key={index}
              movie={movie} //movie name of current index is saved here
              handleIncreseStar={onIncreaseStars}
              handleDecreaseStar={onDecreaseStars}
              handleFavourite={onClickFavourite}
              handleCart={onClickAddToCart}
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
