import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out success logic
        console.log("logOut successfully");
      })
      .catch((error) => {
        // Error handling logic
      });
  };

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
              <NavLink
                to="/"
                className="btn-ghost p-2 rounded-sm hover:scale-125 transition-all ease-in-out duration-200"
              >
                Home
              </NavLink>

              <NavLink
                to="/brand"
                className="btn-ghost p-2 rounded-sm hover:scale-125  transition-all ease-in-out duration-200"
              >
                Brand
              </NavLink>

              <NavLink
                to="/aboutDev"
                className="btn-ghost p-2 rounded-sm hover:scale-125  transition-all ease-in-out duration-200"
              >
                About Dev
              </NavLink>
              {user && (
                <NavLink
                  to="/profile"
                  className="btn-ghost p-2 rounded-sm hover:scale-125  transition-all ease-in-out duration-200"
                >
                  My Profile
                </NavLink>
              )}
            </ul>
          </div>
          <a className="md:text-2xl font-bold italic">CouponVault</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
            <NavLink
              to="/"
              className="btn-ghost p-2 rounded-sm"
            >
              Home
            </NavLink>

            <NavLink
              to="/brand"
              className="btn-ghost p-2 r"
            >
              Brand
            </NavLink>

            <NavLink
              to="/aboutDev"
              className="btn-ghost p-2"
            >
              About Dev
            </NavLink>
            {user && (
              <NavLink
                to="/profile"
                className="btn-ghost p-2 rounded-sm hover:scale-125  transition-all ease-in-out duration-200"
              >
                My Profile
              </NavLink>
            )}
          </ul>
        </div>

        {user ? (
          <div className="navbar-end items-center md:space-x-6 md:ml-0">
            <NavLink to="/login" className="flex justify-center items-center gap-0 ">
              <img
                src={user.photoURL}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-white md:p-2 p-1 md:mr-0 mr-2"
              />
              <p className="text-sm text-white border-r-2 border-y-2 border-white rounded-xl py-1 pr-2 pl-1 font-bold lg:block hidden">
                {user.email}
              </p>
            </NavLink>
            <button
              onClick={handleSignOut}
              className="btn bg-[#134B70] md:hover:scale-105 transition ease-out duration-300 md:hover:text-base text-white font-bold rounded-lg md:hover:bg-[#508C9B] md:mr-0 mr-3"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="navbar-end md:space-x-6 space-x-2">
            <NavLink
              to="/login"
              className="btn bg-[#134B70]  md:hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] text-white font-bold rounded-lg"
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-[#134B70] md:hover:scale-105 transition ease-out duration-300 hover:text-base text-white font-bold rounded-lg hover:bg-[#508C9B] md:mr-0 mr-8"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

{
  /*  */
}

export default Header;
