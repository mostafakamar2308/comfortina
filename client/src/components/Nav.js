import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-evenly font-semibold ">
      <Link to="/home" className="transition-all duration-300 hover:text-white">
        Home
      </Link>
      <Link
        to="/products"
        className="transition-all duration-300 hover:text-white"
      >
        Products
      </Link>
      <Link
        to="/contact"
        className="transition-all duration-300 hover:text-white"
      >
        Contact us
      </Link>
      <Link
        to="/developer"
        className="transition-all duration-300 hover:text-white"
      >
        Developer
      </Link>
    </nav>
  );
}

export default Nav;
