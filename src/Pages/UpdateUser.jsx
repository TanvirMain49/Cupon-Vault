import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const {updatePfp, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUserUpdate = e =>{
        e.preventDefault();
        const name = e.target.newName.value;
        const photoURL = e.target.newPhotoURL.value;

        updatePfp({displayName:name,  photoURL: photoURL})
        .then(() => {
            // Profile updated!
            // ...
            navigate('/profile')

          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    return (
        <div className="md:max-w-screen flex gap-10 py-20 md:px-0 px-4 md:mx-auto md:ml-20 bg-[#201E43]">
        <img
          src="https://i.ibb.co.com/XJK9tnp/Personal-site-amico.png"
          alt=""
          data-aos="fade-up"
          className="w-[45%] md:ml-12 md:block hidden"
        />
        <div className="border border-white md:block hidden"></div>
  
        {/* from start */}
        <div data-aos="fade-down" className="login">
          <div className="card md:w-full md:max-w-sm h-[67%] bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-3 text-white md:ml-12 ml-8 md:mx-0 md:mt-10 mx-4">
            <form onSubmit={handleUserUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">New Name</span>
                </label>
                <input
                  type="text"
                  placeholder="New name"
                  name="newName"
                  className="input input-bordered bg-white/15"
                  required
                />
              </div>
              <div className="form-control md:pb-0 pb-12">
                <label className="label">
                  <span className="label-text font-bold">New PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="New photoURL"
                  name="newPhotoURL"
                  className="input input-bordered bg-white/15"
                  required
                />
                {/* {
                  error && <p className="text-error font-bold my-2 text-center">{error}</p>
                } */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#134B70]  hover:scale-105 hover:text-base transition ease-out duration-300 hover:bg-[#508C9B] text-white font-bold rounded-lg border-none">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateUser;