import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import About from "./About";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid ">
        <a
          className="navbar-brand fs-4"
          style={{
            color: props.mode === "dark" ? "#45ee05" : "black",
            textShadow: `0px 0px 15px ${
              props.mode === "dark" ? "rgb(201 255 0)" : "white"
            }`,
          }}
          href="/"
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More Options
              </Link>
              <ul
                className={`dropdown-menu bg-${
                  props.mode === "dark" ? "dark" : "light"
                }`}
              >
                <li>
                  <Link
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    to="/"
                  >
                    Action
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    to="/"
                  >
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className={`dropdown-item text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open YouTube
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "dark" ? "light" : "dark"
          } mx-2`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={props.toggleTheme}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Turn {props.mode === "light" ? "On" : "Off"} Dark Theme
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Your Title",
};
