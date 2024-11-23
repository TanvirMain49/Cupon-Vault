import React from "react";
import { FaStar } from "react-icons/fa";

const BrandOnSellCard = ({ brand }) => {
  return (
    <div data-aos="zoom-in-right" data-aos-delay="600" className="card flex-row md:w-96 w-80 md:mx-0 mx-auto border border-gray-300 rounded-xl  md:hover:shadow-lg md:hover:shadow-[#508C9B] md:hover:scale-105 transition-all ease-in-out duration-300 relative">
      <figure className="rounded-br-3xl">
        <img
          src={brand.brand_logo}
          alt="Shoes"
          data-aos="zoom-out" 
          data-aos-delay="800"
          className="md:w-24 w-16 md:h-24 h-16 rounded-full absolute -top-4 md:-left-12 -left-3 border-2 border-gray-400 "
        />
      </figure>

      <div className="card-body gap-0 md:ml-6 ml-3 mt-2">
        <h2 className="card-title md:text-2xl text-xl font-bold md:pb-3 pb-2">{brand.brand_name}</h2>

        <p className="text-base md:h-24 md:pb-0 pb-2">{brand.description}</p>

        <p className="font-semibold py-2">
          <span className="font-bold">Total coupon:</span> {brand.total_coupons}
        </p>

        <p className="flex items-center gap-2 font-semibold pb-4">
          <span className="font-bold">Rating:</span> {brand.rating}
          <FaStar className="text-yellow-400"></FaStar>
        </p>

        <div className="card-actions justify-start">
          <div className="badge badge-outline rounded-xl font-bold border-white text-white">
            {brand.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOnSellCard;

