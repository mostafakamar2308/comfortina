import React from "react";
import { Link } from "react-router-dom";
import Actions from "./Actions";

function MobileNav({ activepage }) {
  console.log(activepage);
  return (
    <div className=" block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            to={"/"}
            className={
              activepage === 0
                ? "text-white bg-blue-700 md:text-blue-700 md:bg-transparent block py-2 pr-4 pl-3  rounded md:p-0  dark:text-white"
                : "block py-2 pr-4 pl-3  rounded  md:p-0 text-black"
            }
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/products"}
            className={
              activepage === 1
                ? "block py-2 pr-4 pl-3  rounded  md:p-0 text-white bg-blue-700 md:text-blue-700 md:bg-transparent  dark:text-white"
                : "block py-2 pr-4 pl-3  rounded  md:p-0 text-black"
            }
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={
              activepage === 2
                ? "text-white bg-blue-700 md:text-blue-700 md:bg-transparent block py-2 pr-4 pl-3  rounded md:p-0  dark:text-white mb-2"
                : "block py-2 pr-4 pl-3  rounded  md:p-0 text-black mb-2"
            }
          >
            Contact Us
          </Link>
        </li>
        <hr />
        <Actions />
      </ul>
    </div>
  );
}

export default MobileNav;
