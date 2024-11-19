import React from "react";
import { FaStar } from "react-icons/fa";

const BrandOnSellCard = ({ brand }) => {
  console.log(brand);
  return (
    <div className="card flex-row w-96 border border-gray-300 rounded-xl  hover:shadow-lg hover:shadow-[#508C9B] hover:scale-105 transition-all ease-in-out duration-300 relative">
      <figure className="rounded-br-3xl">
        <img
          src={brand.brand_logo}
          alt="Shoes"
          className="w-24 h-24 rounded-full absolute -top-4 border-2 border-gray-400 "
        />
      </figure>

      <div className="card-body gap-0 ml-6 mt-2">
        <h2 className="card-title text-2xl font-bold pb-3">{brand.brand_name}</h2>

        <p className="text-base h-24">{brand.description}</p>

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

