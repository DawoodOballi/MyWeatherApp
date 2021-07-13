import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <ul>
        <li>
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/404" activeStyle={activeStyle}>
            Error
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
