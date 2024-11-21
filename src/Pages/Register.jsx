import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Flip, toast } from 'react-toastify';

const Register = () => {

  const {createUser, setUser, updatePfp} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    const handleRegister = e =>{
      e.preventDefault();
      const form = new FormData(e.target);
      const name = form.get('name');
      const photoURL = form.get('photoURL');
      const email = form.get('email');
      const password = form.get('password');

      // Password validation
      if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
        setError(
          "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
        );
        return;
      }
      

      // function that create user
      createUser(email, password)
      .then(res => {
        console.log("User created:", res.user);
        setUser(res.user);
        updatePfp({ displayName: name, photoURL: photoURL })
        .then((res) =>{
          navigate("/")
        })
        .catch(error =>{
          const errorText = error.message;
        })

          
      })
      .catch(error =>{
        setError(error.code);
        toast.error("Registration failed. Please try again.", {
          position: "top-center",
          autoClose: 1300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
      })


    }
    return (
        <div className="md:max-w-screen flex md:gap-20 py-20 mx-auto bg-[#201E43]">
        {/* from start */}
        <div className="login md:ml-28 ml-4 md:mt-12">
          <div className="card md:w-full md:max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-3 text-white md:mr-24">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name='name'
                  className="input input-bordered bg-white/15"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  name='photoURL'
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
                  name="email"
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
                  name="password"
                  className="input input-bordered bg-white/15"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#134B70]  hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] text-white font-bold rounded-lg border-none">
                  Register
                </button>
              </div>
              {
                error && <p className='text-center font-bold text-sm text-error'>{error}</p>
              }
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

        <div className="border border-white md:ml-7 md:block hidden"></div>

        <img
          src="https://i.ibb.co.com/cNDbpC8/Tablet-login-amico.png"
          alt=""
          className="w-[45%] ml-4 md:block hidden"
        />

      </div>
    );
};

export default Register;