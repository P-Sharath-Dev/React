//implementing class components
import { Component } from "react";
import "./movieCard.css";

export default class MovieCard extends Component {
  render() {
    // Getting movie data from props
    const {
      title,
      plot,
      price,
      poster,
      rating,
      star,
      isFavourte,
      isAddedToCart,
    } = this.props.movie;

    // Getting functions from parent component through props
    const {
      handleFavourite,
      handleIncreseStar,
      handleDecreaseStar,
      handleCart,
    } = this.props;
    return (
      <div className="main">
        <div className="movie-card">
          {/* moviecard's left side */}
          <div className="left">
            <img src={poster} alt="Poster" />
          </div>

          {/* moviecard's right side */}
          <div className="right">
            <div className=" title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs.{price}</div>

            {/* footer */}
            <div className="footer">
              {/* Movie rating */}
              <div className="rating">{rating}</div>
              {/* Increase and decrease star buttons */}
              <div className="stars">
                {/* Increase star */}
                <i
                  className="fa-regular fa-square-plus"
                  onClick={() => handleIncreseStar(this.props.movie)}
                ></i>
                {/* Decrease star */}
                <i
                  className="fa-regular fa-square-minus"
                  onClick={() => handleDecreaseStar(this.props.movie)}
                ></i>

                <i className="fas fa-star"></i>
                {/* Current star value */}
                <span className="star-count">{star}</span>
              </div>

              {/* conditional rendering for favourite, UnFavourite buttons */}

              {/* Favourite / Unfavourite button */}
              <button
                className={isFavourte ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => handleFavourite(this.props.movie)}
              >
                {isFavourte ? "Unfavourite" : "favourite"}
              </button>

              {/* Add to cart / Remove from cart button */}
              <button
                className={isAddedToCart ? "addCart-btn" : "removeCart-btn"}
                onClick={() => handleCart(this.props.movie)}
              >
                {isAddedToCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
