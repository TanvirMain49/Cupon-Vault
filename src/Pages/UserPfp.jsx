import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserPfp = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="w-full bg-[#201E43] md:py-24 py-12 flex flex-col justify-center items-center rounded-3xl text-white relative">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
        Hello, {user.displayName}! We're glad to have you here!
        </h1>

     <div className="flex justify-center items-center py-8">
     <div className="border bg-white/10 backdrop-blur-lg  shadow-lg  border-white/20 p-4 rounded-lg flex items-center justify-center">
        <img src={user?.photoURL} alt="" />
        <div className="border-l border-white ml-3 pl-2">
            <h2 className="text-lg font-semibold">Name: {user?.displayName}</h2>
            <h2 className="text-lg font-semibold">Email: {user?.email}</h2>
        </div>
      </div>
     </div>
        <button className="btn bg-[#134B70] md:hover:scale-105 transition ease-out duration-300 md:hover:text-base text-white font-bold rounded-lg md:hover:bg-[#508C9B] md:mr-0 mr-3">
            Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserPfp;
