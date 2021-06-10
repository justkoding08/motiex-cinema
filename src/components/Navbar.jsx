import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-motiex">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="../../../images/logo.svg"
              alt=""
              width="150"
              height="33"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  TV Show
                </Link>
              </li>
            </ul>

            <Link
              to="/"
              className="notification shadow-none text-decoration-none">
              <img
                src="../../../images/notification-icon.svg"
                className="notif-icon"
                alt="Notification"
              />
              <div className="notif" />
            </Link>
            <form action="#" className="d-grid">
              <button type="submit" class="btn btn-signup px-4 btn-block">
                Free Sign Up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
