import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          AmnaWebCode
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:static absolute top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:z-auto z-50 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="md:ml-6">
            <Link
              to="/"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="md:ml-6">
            <Link
              to="/get-quote"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </li>
          <li className="md:ml-6">
            <Link
              to="/signup"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </Link>
          </li>
          <li className="md:ml-6">
            <Link
              to="/client-dashboard"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              Client Dashboard
            </Link>
          </li>
          <li className="md:ml-6">
            <Link
              to="/admin-dashboard"
              className="block md:inline-block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              Admin Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
