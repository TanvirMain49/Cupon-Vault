import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BrandCard = ({ brand }) => {

  const {user} = useContext(AuthContext);
  return (
    <div data-aos="zoom-out-down" data-aos-delay="200" className="card card-compact bg-base-100 md:w-96 border border-white/40 rounded-2xl  hover:shadow-lg hover:shadow-[#201E43]">
      
      <figure className="p-2">
        <img
          src={brand.brand_logo}
          alt="Shoes"
          className="h-64 w-full p-4 rounded-e-lg object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-6">
          <h2 className="card-title md:text-3xl text-2xl font-bold">{brand.brand_name}</h2>
          {
            brand.isSaleOn?<div className="text-green-400 text-base font-semibold animate-bounce border border-green-400 rounded-xl px-2 w-24 md:whitespace-nowrap"> 
            Sale is On!
          </div>
          : <div className="text-red-500 text-base font-semibold border border-red-400 rounded-xl md:px-2 px-1 w-24 "> Sale is Off</div>
          }
        </div>
        <p className="text-base">{brand.description}</p>
        <p className="flex items-center text-lg mr-4 font-semibold">
          Rating: {brand.rating}
          <div className="rating ml-2">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
          </div>
        </p>
        <div className="card-actions justify-start">
          <NavLink 
          to={`/brand/${brand._id}`}
          className="btn border-2 border-[#134B70] bg-transparent hover:scale-105 transition ease-out duration-300 hover:text-base hover:bg-white text-[#134B70] font-bold rounded-lg hover:border-[#134B70] mb-6 mt-2">View Coupon</NavLink>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

