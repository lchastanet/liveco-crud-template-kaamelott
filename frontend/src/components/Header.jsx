import { NavLink } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="add-knight">Add knight</NavLink>
    </nav>
  );
}

export default Header;
