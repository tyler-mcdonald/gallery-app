// import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/wildlife">wildlife</NavLink>
        </li>
        <li>
          <NavLink to="/castles">castles</NavLink>
        </li>
        <li>
          <NavLink to="/astronomy">astronomy</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
