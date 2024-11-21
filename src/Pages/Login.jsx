import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";

const Login = () => {

  const {logIn, signInWithGoogle, setUser, setForgetEmail} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [eye, setEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setForgetEmail(email);

    logIn(email, password)
    .then(res =>{
      setUser(res.user);
      navigate(location?.state ? location.state : '/')

    })
    .catch(error =>{
      setError(error.code);
    })
    
  }

  const handleGoogle = () =>{
    signInWithGoogle()
    .then(res =>{
      setUser(res.user);
      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      setError(error.message)
    })
  }

  const handleEmail=(e) =>{
      setForgetEmail(e.target.value);
  }

  const handleShowPassword = () =>{
      setEye(!eye)
  }

  return (
    <div className="md:max-w-screen flex gap-10 py-20 md:px-0 px-4 md:mx-auto md:ml-20 bg-[#201E43]">
      <img
        src="https://i.ibb.co.com/vY9P8XP/Computer-login-bro-2.png"
        alt=""
        className="w-[45%] md:ml-12 md:block hidden"
      />
      <div className="border border-white md:block hidden"></div>

      {/* from start */}
      <div className="login">
        <div className="card md:w-full md:max-w-sm h-[67%] bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-3 text-white md:ml-12 ml-8 md:mx-0 md:mt-10 mx-4">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleEmail}
                className="input input-bordered bg-white/15"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type={
                  eye? "text" : "password"
                }
                placeholder="password"
                name="password"
                className="input input-bordered bg-white/15"
                required
              />
              {
                eye ? <button onClick={handleShowPassword} type="button" className="absolute right-3 top-[54px] text-sm cursor-pointer">
                <RxEyeOpen />
              </button> : 
              <button onClick={handleShowPassword} type="button" className="absolute right-3 top-[54px] text-sm cursor-pointer">
              <RiEyeCloseFill />
              </button>
              }
              
              <label className="label">
                <Link
                  to='/login/forgetPassword'
                  className="label-text-alt link link-hover font-bold"
                >
                  Forgot password?
                </Link>
              </label>
              {
                error && <p className="text-error font-bold my-2 text-center">{error}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#134B70]  hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] text-white font-bold rounded-lg border-none">
                Login
              </button>
            </div>
          </form>
        </div>
        <p className="font-bold text-center mt-6 text-sm md:ml-12">
          Don’t have an account yet?{" "}
          <NavLink to="/register" className="text-blue-800 underline">
            Register
          </NavLink>{" "}
          here to get started!
        </p>
        <div className="divider divider-accent py-4 md:ml-12 md:mx-0 mx-3">OR</div>

        <button
        onClick={handleGoogle} 
        className="btn bg-[#134B70] hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] border-none text-white font-bold rounded-lg md:ml-12 md:w-[90%] w-full">
          {" "}
          <FaGoogle /> Log in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
