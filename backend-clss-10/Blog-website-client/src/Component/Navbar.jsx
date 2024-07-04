import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-[1000]  bg-black ">
      {/* Up div */}
      <div className="bg-teal-400 p-2">
        <div className="flex justify-between mx-10">
          <h1 className="text-white font-bold">20% off on next booking</h1>
          <h1 className="text-white font-bold">Mobile No: 01910255376</h1>
        </div>
      </div>
      {/* Down div */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/best">Best Places</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-xl">
            <img className="w-28 h-10" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/best">Best Places</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/button" className="btn">
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
