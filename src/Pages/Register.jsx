import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className="max-w-screen flex gap-8 py-20 mx-auto bg-[#201E43]">
        {/* from start */}
        <div className="login ml-28">
          <div className="card w-full max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-3 text-white mr-24">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="email"
                  placeholder="name"
                  className="input input-bordered bg-white/15"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">PhotoURL</span>
                </label>
                <input
                  type="email"
                  placeholder="photoURL"
                  className="input input-bordered bg-white/15"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#134B70]  hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] text-white font-bold rounded-lg border-none">
                  Register
                </button>
              </div>
            </form>
          </div>
          <p className="font-bold text-center mt-6 text-sm mr-12">
          Already have an account?  {" "}
            <NavLink to="/login" className="text-blue-800 underline">
                Log
            </NavLink>{" "}
            in here 
          </p>
        </div>

        <div className="divider divider-accent divider-horizontal text-white"></div>

        <img
          src="https://i.ibb.co.com/cNDbpC8/Tablet-login-amico.png"
          alt=""
          className="w-[45%] ml-12"
        />

      </div>
    );
};

export default Register;