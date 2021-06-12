import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const upcomingMoviesAPI =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=516c756559ac1872d985e15ef9e432cf&language=en-US&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w780";

export default class CardUpcoming extends Component {
  state = {
    upcoming: [],
  };

  componentDidMount() {
    axios
      .get(upcomingMoviesAPI)
      .then((res) => {
        console.log("data movies :", res.data.results.slice(0, 18));
        this.setState({
          upcoming: res.data.results.slice(0, 18),
        });
      })
      .catch((err) => {
        // Error
      });
  }

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      className: "center",
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="upcoming-section">
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
              <h2 className="text-title-upcoming">
                Coming<span>Soon</span>
              </h2>
              <div className="prev-next-arrow">
                <button
                  className="btn btn-preview shadow-none"
                  onClick={this.previous}>
                  <i class="fas fa-angle-left preview-icon" />
                </button>
                <button
                  className="btn btn-next shadow-none"
                  onClick={this.next}>
                  <i class="fas fa-angle-right next-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.state.upcoming.map((itemUpcoming) => {
            return (
              <div key={itemUpcoming.id} className="row-upcoming ps-2 pe-2">
                <div className="col-lg col-upcoming">
                  <div className="card-upcoming">
                    <img
                      src={IMG_API + itemUpcoming.backdrop_path}
                      alt={itemUpcoming.title}
                      className="image-upcoming img-fluid"
                    />
                    <div className="bg-image-upcoming" />
                    <form action="" className="form-upcoming">
                      <button className="btn btn-upcoming-play shadow-none">
                        <i class="fas fa-play icon-play-upcoming" />
                      </button>
                    </form>
                    <div className="text-upcoming">
                      <Link to="/" className="text-decoration-none">
                        <h3 className="text-truncate">{itemUpcoming.title}</h3>
                      </Link>
                      <div className="upcoming-star d-flex justify-content-center align-items-center">
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star-half-alt star-off" />
                        <span className="title-upcoming-star">
                          {itemUpcoming.vote_average}
                          <small>/10</small> ({itemUpcoming.vote_count})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
