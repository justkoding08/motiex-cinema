import React, { Component } from "react";

export default class CardCinema extends Component {
  render() {
    return (
      <div className="cinema-section">
        <div className="container-fluid">
          <div className="row mb-1">
            <div className="col-lg-12 d-flex justify-content-center">
              <h2 className="text-title-join-btn">Many Benefits To Join</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <p className="text-subtitle-join-btn">
                Join and be the first to watch all our latest movies right now.
                Join and book cinema tickets now
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <form action="" className="d-grid">
                <button className="btn btn-sign-up px-4 btn-block">
                  Join Free
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
