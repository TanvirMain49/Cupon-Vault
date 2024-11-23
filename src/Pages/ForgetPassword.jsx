import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { forgetEmail, setForgetEmail, forgetPassword, signOutUser } =
  useContext(AuthContext);
  const navigate = useNavigate();


  const restPassword = (e) => {
    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        // Password reset email sent!
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
            alert("No user found with this email.");
          } else if (errorCode === "auth/invalid-email") {
            alert("Invalid email address.");
          } else {
            alert("An error occurred: " + errorMessage);
          }
        // ..
      });

    signOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold pt-14 text-center">Change Password!</h1>
      <form
        onSubmit={restPassword}
        className="card-body w-96 mx-auto mt-24 border-2 border-white rounded-xl"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            defaultValue={forgetEmail}
            onChange={(e) => setForgetEmail(e.target.value)}
            className="input input-bordered bg-white/15"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#134B70]  hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] text-white font-bold rounded-lg border-none">
            Change password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
