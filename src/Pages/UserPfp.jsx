import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const UserPfp = () => {
  const { user } = useContext(AuthContext);
  return (
      <div className="w-full bg-[#201E43] md:py-24 flex flex-col justify-center items-center rounded-3xl text-white relative">
        <h1 className="text-3xl font-bold text-center">
          Hello, {user.displayName}! We're glad to have you here!
        </h1>

        <div className="border flex flex-col justify-center items-center bg-white/10 backdrop-blur-lg shadow-lg rounded-lg border-white/20 mt-8">
          <div className="p-4 rounded-lg flex items-center justify-center">
            <img src={user?.photoURL} alt="" />
            <div className="border-l border-white ml-3 pl-2">
              <h2 className="text-lg font-semibold">
                Name: {user?.displayName}
              </h2>
              <h2 className="text-lg font-semibold">Email: {user?.email}</h2>
            </div>
          </div>
          <button className="btn bg-[#134B70] md:hover:scale-105 transition ease-out duration-300 md:hover:text-base text-white font-bold rounded-lg md:hover:bg-[#508C9B] md:mr-0 mr-3 mb-4">
            Edit Profile
          </button>
        </div>
        <NavLink to='/' className="btn bg-[#134B70] md:hover:scale-105 transition ease-out duration-300 md:hover:text-base text-white font-bold rounded-lg md:hover:bg-[#508C9B] md:mr-0 mr-3 mt-6">
          <FaArrowAltCircleLeft /> Back to Home
        </NavLink>
      </div>
  );
};

export default UserPfp;
