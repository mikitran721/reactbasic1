import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>

        <NavLink className="nav-link" to="/todo">
          Todos
        </NavLink>
        <NavLink className="nav-link" to="/works">
          Works
        </NavLink>
        <NavLink className="nav-link" to="/user">
          User List
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </div>
    );
  }
}

export default Nav;
