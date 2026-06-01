import { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
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
          poster:
            "https://cdn.marvel.com/content/1x/spidermanbrandnewday_online_1080x1350_ninjas_02.jpg",
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
            "https://cdn.marvel.com/content/1x/spidermanbrandnewday_online_1080x1350_ninjas_02.jpg",
          rating: 7,
          star: 3,
          isFavourte: false,
          isAddedToCart: false,
        },
      ],
    };
  }

  render() {
    return (
      <>
        {/* //using props
        <MovieCard
          title={this.state.title}
          plot={this.state.plot}
          price={this.state.price}
          poster={this.state.poster}
          rating={this.state.rating}
          star={this.state.star}
          isFavourte={this.state.isFavourte}
          isAddedToCart={this.state.isAddedToCart}
        /> */}
        {this.state.movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </>
    );
  }
}

// Put defaultProps here
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
