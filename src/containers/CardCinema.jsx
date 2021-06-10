import React, { Component } from "react";

export default class CardCinema extends Component {
  render() {
    return (
      <div className="cinema-section">
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
              <h2 className="text-title-cinema">
                Best Movie <span>Cinema</span>
              </h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <figure class="figure">
                <img
                  src="../../../images/brand-cinemax.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure>
            </div>
            <div className="col-md-3">
              <figure class="figure">
                <img
                  src="../../../images/brand-cinemapolis.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure>
            </div>
            <div className="col-md-3">
              <figure class="figure">
                <img
                  src="../../../images/brand-cvg.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure>
            </div>
            <div className="col-md-3">
              <figure class="figure">
                <img
                  src="../../../images/brand-platinum.svg"
                  class="figure-img img-fluid rounded"
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
