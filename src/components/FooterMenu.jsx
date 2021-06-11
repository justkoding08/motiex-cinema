import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <footer className="footer-section">
      <hr className="hr" />
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <img
              src="../../../images/logo.svg"
              className="img-fluid"
              alt="Movtiex"
            />
            <h5 className="logo-desc">
              Enjoy all the collection of the best box office film services,
              ranging from action, horror, drama, and many others. Everything
              you can enjoy only at MOVTIEX.
            </h5>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <h5 className="title-footer mb-4">
              Why <span>Choose Us?</span>
            </h5>
            <ul class="list-unstyled">
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> Terms and
                  conditions
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> Privacy Policy
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> About The Movtiex
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> Forum Movtiex
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <h5 className="title-footer mb-4">
              Explore <span>Link</span>
            </h5>
            <ul class="list-unstyled">
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> Our Service
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> Equity System
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> Refund
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-check-circle me-1" /> Shareholder
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <h5 className="title-footer mb-4">
              Our <span>Office</span>
            </h5>
            <ul class="list-unstyled">
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="fas fa-headset me-1" /> Support: +62 461 320
                  1547
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-map me-1" /> Central of Celebes No. 29
                  (realytic)
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  <i className="far fa-envelope me-1" /> codeseribu@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
