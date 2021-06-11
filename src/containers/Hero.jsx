import axios from "axios";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const playNowAPI =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=516c756559ac1872d985e15ef9e432cf&language=en-US&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default class Hero extends Component {
  state = {
    playNow: [],
  };

  componentDidMount() {
    axios
      .get(playNowAPI)
      .then((res) => {
        console.log("data movies :", res.data.results.slice(0, 12));
        this.setState({
          playNow: res.data.results.slice(0, 12),
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
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      className: "center",
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
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
      <Slider
        ref={(c) => (this.slider = c)}
        {...settings}
        className="hero-section">
        {this.state.playNow.map((itemPlay) => {
          return (
            <Fragment>
              <div className="row flex-lg-row-reverse align-items-center justify-content-center pt-4 pb-2 row-playNow">
                <div className="col-10 col-sm-8 col-lg-6">
                  <div className="overlay-playNow border-0 mb-4 mb-sm-4 mb-md-4">
                    <img
                      src={IMG_API + itemPlay.backdrop_path}
                      className="d-block mx-lg-auto img-fluid image-playNow"
                      alt={itemPlay.title}
                    />
                    <div className="overlay-bg-playNow" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold lh-1 title-playNow text-center text-sm-center text-md-center text-lg-start">
                    Ready to Enjoy the Movie
                  </h1>
                  <h1 class="display-5 fw-bold subtitle-playNow text-center text-sm-center text-md-center text-lg-start">
                    {itemPlay.title}
                  </h1>
                  <div className="hero-star d-flex justify-content-start align-items-center lh-1 mb-3 justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start">
                    <small className="fas fa-star star-on" />
                    <small clasName="fas fa-star star-on" />
                    <small className="fas fa-star star-on" />
                    <small className="fas fa-star star-on" />
                    <small className="fas fa-star star-on" />
                    <small className="fas fa-star-half-alt star-off" />
                    <span className="title-hero-star">
                      {itemPlay.vote_average}
                      <small>/10 ({itemPlay.vote_count})</small>
                    </span>
                  </div>
                  <div className="d-flex justify-content-start align-items-center mb-3 justify-content-sm-center justify-content-md-center justify-content-lg-start">
                    <p className="lead overview-playNow text-center text-sm-center text-md-center text-lg-start lh-2">
                      {itemPlay.overview}
                    </p>
                  </div>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-md-center justify-content-lg-start">
                    <Link
                      to="/"
                      type="button"
                      class="btn btn-detail btn-lg px-4 me-md-2">
                      <i className="fas fa-info-circle me-2" />
                      View Detail
                    </Link>
                    <button type="button" class="btn btn-playnow btn-lg px-4">
                      <i className="fas fa-play-circle me-2" />
                      Play Trailer
                    </button>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </Slider>
    );
  }
}
