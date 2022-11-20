import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Actions from "./Actions";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

function SiteHeader(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setIsNavOpen] = useState(false);
  const [activepage, setActivePage] = useState(props.activepage || 0);
  useEffect(() => {
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <header
      className={
        "md:flex md:justify-between bg-brown-dark p-5 items-center shadow-lg bg-tranparent  z-10 w-full "
      }
    >
      <div className="flex justify-between">
        <Link to="/">
          <h1 className="text-2xl tracking-wider font-alfa  font-bold pointer-events-none text-white-dark uppercase">
            Comfortina
          </h1>
        </Link>
        {isMobile && (
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </div>
      {isMobile ? (
        navOpen && <MobileNav activepage={activepage} />
      ) : (
        <>
          <Nav />
          <Actions />
        </>
      )}
    </header>
  );
}

export default SiteHeader;
