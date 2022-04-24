import React from "react";
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand text-warning" href="!#">
            @ {new Date().getFullYear()} React Food SPA App
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
