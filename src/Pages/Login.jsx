import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-screen flex gap-8 py-20 mx-auto bg-[#201E43]">
      <img
        src="https://i.ibb.co.com/vY9P8XP/Computer-login-bro-2.png"
        alt=""
        className="w-[45%]"
      />
      <div className="divider divider-accent divider-horizontal text-white"></div>

      {/* from start */}
      <div className="login">
        <div className="card w-full max-w-sm h-[67%] bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-3 text-white ml-12">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white/15"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white/15"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#134B70]  hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] text-white font-bold rounded-lg border-none">
                Login
              </button>
            </div>
          </form>
        </div>
        <p className="font-bold text-center mt-6 text-sm ml-12">
          Don’t have an account yet?{" "}
          <NavLink to="/register" className="text-blue-800 underline">
            Register
          </NavLink>{" "}
          here to get started!
        </p>
        <div className="divider divider-accent py-4 ml-12">OR</div>

        <button 
        className="btn bg-[#134B70]  hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] border-none text-white font-bold rounded-lg ml-12 w-[90%]">
          {" "}
          <FaGoogle /> Log in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
