import React, { Component } from "react";

export default class CardCinema extends Component {
  render() {
    return (
      <div className="cinema-section">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-lg-12 d-flex justify-content-center">
              <h2 className="text-title-cinema">Download App With:</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <figure className="figure me-4">
                <img
                  src="../../../images/play-store.svg"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure>
              <figure className="figure">
                <img
                  src="../../../images/app-store.svg"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
