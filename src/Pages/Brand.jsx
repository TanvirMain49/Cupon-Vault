import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import BrandCard from "../Components/Brand/BrandCard";
import { FaArrowAltCircleLeft, FaSearch } from "react-icons/fa";
import { RiSearchEyeFill } from "react-icons/ri";

const Brand = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div className="font-Roboto">
      <div className="w-full bg-gradient-to-r from-red-500 to-violet-800 py-24 flex flex-col justify-center items-center rounded-3xl text-white">
        <h1 className="text-5xl font-bold text-center text-">
          Explore Top Brands and Their Exciting Offers
        </h1>
        <p className="text-base text-center pt-6 px-80">
          Discover exclusive deals and irresistible discounts from your favorite
          brands. Dive into a world of savings and make every shopping
          experience rewarding!
        </p>

        <div className="flex items-center mt-8">
          <label className="input input-bordered flex items-center gap-2 bg-white text-black rounded-l-xl w-96 h-11">
            <input type="text" className="grow" placeholder="Type here to search" />
          </label>
          <button className="btn w-24 h-13 bg-gradient-to-r from-red-500 to-violet-800 text-white rounded-r-xl">
            Search
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-20 ml-10 mb-12 text-center px-96 ">Save more with  <span className="text-yellow-500">curated coupons</span> for <span className="text-red-600">top brands</span></h1>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 ml-9 pb-20 pt-4
            "
      >
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brand;

{
  /* <NavLink to='/' className="flex gap-2 items-center btn w-40 mt-12 bg-gradient-to-r from-red-500 to-violet-800 text-white hover:scale-105 transition duration-300 all ease-out rounded-xl hover:text-base">
<FaArrowAltCircleLeft/>
Back to Home
</NavLink> */
}
