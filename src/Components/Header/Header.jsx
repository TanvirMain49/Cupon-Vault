import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink>Home</NavLink>
              <NavLink>Brand</NavLink>
              <NavLink>About Dev</NavLink>
            </ul>
          </div>
          <a className="text-2xl font-bold italic">CouponVault</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
            <NavLink to="/" className="btn-ghost p-2 rounded-sm hover:scale-125 transition-all ease-in-out duration-200">
              Home
            </NavLink>

            <NavLink to="/brand" className="btn-ghost p-2 rounded-sm hover:scale-125  transition-all ease-in-out duration-200">
              Brand
            </NavLink>

            <NavLink className="btn-ghost p-2 rounded-sm hover:scale-125  transition-all ease-in-out duration-200">
              About Dev
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <a className="btn bg-gradient-to-r from-red-700 to-violet-800 hover:bg-red-900 text-white font-bold rounded-sm">
            Log in
          </a>
          <a className="btn bg-gradient-to-r from-red-700 to-violet-800 hover:bg-red-900 text-white font-bold rounded-sm ">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

{
  /*  */
}

export default Header;