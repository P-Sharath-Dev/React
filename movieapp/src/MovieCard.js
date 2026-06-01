//implementing class components
import { Component } from "react";

export default class MovieCard extends Component {
  //creating state object
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "SPIDER-MAN : BRAND NEW DAY",
  //     plot: "Alone and crime-fighting in a New York City that no longer knows his name, Peter Parker has devoted himself to being a full-time Spider-Man. But as the pressure on Spider-Man intensifies, Peter undergoes a surprising physical evolution that threatens his existence.",
  //     price: 199,
  //     poster:
  //       "https://cdn.marvel.com/content/1x/spidermanbrandnewday_online_1080x1350_ninjas_02.jpg",
  //     rating: 9.5,
  //     star: 0,
  //     isFavourte: false,
  //     isAddedToCart: false,
  //   };
  //   this.addStar = this.addStar.bind(this);
  //   // this.decreaseStar = this.decreaseStar.bind(this);
  // }

  //arrow function instead of bind method
  addStar = () => {
    // update star till 5 only
    if (this.props.star < 5) {
      //2nd way of update using setState(); (passing callback in setState())
      this.setState(
        (prevState) => {
          return {
            star: prevState.star + 0.5,
          };
        },
        () => {
          console.log("star in setState : ", this.props.star);
        },
      );
    }
  };

  //function for decreasing star
  decreaseStar = () => {
    if (this.props.star > 0) {
      this.setState((prevState) => {
        return {
          star: prevState.star - 0.5,
        };
      });
    }
  };

  //handling fav button
  handleFavourite = () => {
    this.setState({
      isFavourte: !this.props.isFavourte,
    });
  };

  //handling cart button
  handleCart = () => {
    this.setState(
      {
        isAddedToCart: !this.props.isAddedToCart,
      },
      // () => {
      //   console.log("isFavourite : ", this.state.isFavourte);
      // },
    );
  };

  render() {
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
              <div className="rating">{rating}</div>
              <div className="stars">
                <i
                  className="fa-regular fa-square-plus"
                  onClick={this.addStar}
                ></i>
                &nbsp;
                <i
                  className="fa-regular fa-square-minus"
                  onClick={this.decreaseStar}
                ></i>
                &nbsp;
                <i className="fas fa-star"></i>
                <span className="star-count">{star}</span>
              </div>

              {/* conditional rendering for favourite, UnFavourite buttons */}

              <button
                className={isFavourte ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFavourite}
              >
                {isFavourte ? "Unfavourite" : "favourite"}
              </button>

              <button
                className={isAddedToCart ? "addCart-btn" : "removeCart-btn"}
                onClick={this.handleCart}
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
