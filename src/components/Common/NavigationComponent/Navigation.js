import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./../../../css/App.scss";
import logo from "./../../../img/logo.png"

const Navigation = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav class="navbar navbar-expand navbar-light bg-custom-1">
      <a class="navbar-brand" href="logo">
        <img className="logo" src={logo} alt="logo..."/>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NavLink
              to="/"
              activeStyle={activeStyle}
              exact
              className="nav-link font-weight-bold"
            >
              Home
              {/* <FontAwesomeIcon icon={faHome} /> */}
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to="/404"
              activeStyle={activeStyle}
              className="nav-link font-weight-bold"
            >
              Details
              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
