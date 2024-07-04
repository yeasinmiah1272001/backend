import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/banner/logo.jpg";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md font-semibold text-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Bookstore Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-semibold">Bookstore</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/Allbooks" className="text-gray-600 hover:text-gray-900">
            All Books
          </Link>
          <Link
            to="/dash"
            className="text-gray-600 hover:text-gray-900 flex gap-2"
          >
            <span>DashBoard</span>
           
          </Link>
          <Link to="/mybook" className="text-gray-600 hover:text-gray-900">
            My Books
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/Allbooks"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            All Books
          </Link>
          <Link
            to="/dash"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            DashBoard
          </Link>
          <Link
            to="/mybook"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            My Books
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
