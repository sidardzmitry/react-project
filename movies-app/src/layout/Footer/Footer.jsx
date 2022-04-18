import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand text-success" href="!#">
            @ {new Date().getFullYear()} Movies App
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
              <a className="nav-link active text-light" aria-current="page" href="!#">
                Contacts
              </a>
              <a className="nav-link text-light" href="!#">
                My account
              </a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
