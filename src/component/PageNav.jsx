import { NavLink, Link } from "react-router-dom";
import React from "react";
import Logo from "./Logo.jsx";

function PageNav() {
  return (
    <nav className="flex items-center justify-between pb-12 ">
      <Logo />

      <ul className="list-none flex items-center space-x-16">
        <li>
          <NavLink
            to="/pricing"
            className={
              " text-gray-300 hover:text-white no-underline uppercase text-xl font-semibold transition-colors duration-200"
            }
          >
            pricing
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/product"
            className={
              " text-gray-300 hover:text-white no-underline uppercase text-xl font-semibold transition-colors duration-200"
            }
          >
            product
          </NavLink>
        </li>

        <li>
          <Link
            to="/login"
            className="
              bg-green-500 text-gray-900 
              py-3 px-8 rounded-lg 
              font-semibold uppercase 
              transition-colors duration-200 
              hover:bg-green-400
            "
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
