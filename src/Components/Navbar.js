import React  from "react";
import { Link,} from "react-router-dom";

function Navbar({ user }) {
  
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div>
            <Link to="/">
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                02_ZeroTwo
              </span>
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul className="pt-4 text-base text-gray-400 md:flex md:justify-between md:pt-0">
              <li>
                <Link className="md:p-4 py-2 block hover:text-white" to="/">
                  New Realeases
                </Link>
              </li>
              <li>
                <Link className="md:p-4 py-2 block hover:text-white" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="md:p-4 py-2 block hover:text-white" to="/">
                  Contact
                </Link>
              </li>
              <li>
                {user ? (
                  <Link
                  
                  className="text-white bg-sky-500 md:p-3 mt-1 block py-3 pr-4 md:pl-3  md:hover:bg-transparent md:border md:dark:hover:bg-transparent font-serif focus:outline-none focus:ring-blue-300 md:hover:bg-opacity-10 rounded"
                    to="/dashboard"
                  >
                    Get started
                  </Link>
                ) : (
                  <Link
                    className="text-white bg-sky-500 md:p-3 mt-1 block py-3 pr-4 md:pl-3  md:hover:bg-transparent md:border md:dark:hover:bg-transparent font-serif focus:outline-none focus:ring-blue-300 md:hover:bg-opacity-10 rounded"
                    to="/login"
                  >
                    Login
                  </Link>
                  
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
