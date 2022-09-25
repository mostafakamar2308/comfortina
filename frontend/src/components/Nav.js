import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-evenly">
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact-me">Contact Me</Link>
      <Link to="/developer">Developer</Link>
    </nav>
  );
}

export default Nav;
