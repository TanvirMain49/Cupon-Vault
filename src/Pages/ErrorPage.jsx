import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-sm max-h-screen mx-auto flex flex-col justify-center items-center gap-2">
      <img src="https://i.ibb.co.com/LJYyDkY/404-Error-amico.png" alt="" />
      <NavLink
        to="/"
        className="btn bg-[#134B70] md:hover:scale-105 transition ease-out duration-300 md:hover:text-base text-white font-bold rounded-lg md:hover:bg-[#508C9B] md:mr-0 mr-3 mt-6"
      >
        <FaArrowAltCircleLeft /> Back to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
