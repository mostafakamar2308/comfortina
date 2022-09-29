import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-evenly font-semibold ">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact us</Link>
      <Link to="/developer">Developer</Link>
    </nav>
  );
}

export default Nav;
