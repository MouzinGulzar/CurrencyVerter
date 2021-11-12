import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>CurrencyVerter</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{position: "absolute", right: "5% "}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
