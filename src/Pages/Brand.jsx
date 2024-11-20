import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../Components/Brand/BrandCard";


const Brand = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div className="font-Roboto">
      <div className="w-full  bg-gradient-to-l from-[#090979] to-[#00d4ff] py-24 flex flex-col justify-center items-center rounded-3xl text-white">
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
          <button className="btn w-24 h-13 bg-[#134B70] hover:scale-105 transition ease-out duration-300 hover:text-base text-white font-bold rounded-lg hover:bg-[#508C9B] border-none">
            Search
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-20 ml-10 mb-12 text-center px-96 ">Save more with  <span className="text-[#508C9B]">curated coupons</span> for <span className="text-[#508C9B]">top brands</span></h1>
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

