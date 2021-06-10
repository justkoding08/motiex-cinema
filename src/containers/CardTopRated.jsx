import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const topRatedAPI =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=516c756559ac1872d985e15ef9e432cf&language=en-US&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export default class CardTopRated extends Component {
  state = {
    toprated: [],
  };

  componentDidMount() {
    axios
      .get(topRatedAPI)
      .then((res) => {
        console.log("data movies :", res.data.results.slice(0, 18));
        this.setState({
          toprated: res.data.results.slice(0, 18),
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
      slidesToShow: 8,
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
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="toprated-section">
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
              <h2 className="text-title-toprated">
                New Movie <span>Top Rated</span>
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
          {this.state.toprated.map((itemTopRated) => {
            return (
              <div key={itemTopRated.id} className="row-toprated ps-2 pe-2">
                <div className="col-lg col-toprated">
                  <div className="card-toprated">
                    <img
                      src={IMG_API + itemTopRated.poster_path}
                      alt={itemTopRated.title}
                      className="image-toprated img-fluid"
                    />
                    <div className="bg-image-toprated" />
                    <form action="" className="form-toprated">
                      <button className="btn btn-toprated-play shadow-none">
                        <i class="fas fa-play icon-play-toprated" />
                      </button>
                    </form>
                    <div className="text-toprated">
                      <Link to="/" className="text-decoration-none">
                        <h3 className="text-truncate">{itemTopRated.title}</h3>
                      </Link>
                      <div className="toprated-star d-flex justify-content-center align-items-center">
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star star-on" />
                        <small class="fas fa-star-half-alt star-off" />
                        <span className="title-rated-star">
                          {itemTopRated.vote_average}
                          <small>/10</small>
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
