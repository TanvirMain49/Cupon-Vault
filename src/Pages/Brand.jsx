import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../Components/Brand/BrandCard";


const Brand = () => {
  const brands = useLoaderData();
  return (
    <div className="font-Roboto">
      <div data-aos="fade-right" className="w-full bg-[#201E43] md:py-24 py-12 flex flex-col justify-center items-center rounded-3xl text-white">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">
          Explore Top Brands and Their Exciting Offers
        </h1>
        <p className="md:text-base text-sm text-center pt-6 lg:px-80 md:px-32 px-1">
          Discover exclusive deals and irresistible discounts from your favorite
          brands. Dive into a world of savings and make every shopping
          experience rewarding!
        </p>

        <div className="flex items-center mt-8">
          <label className="input input-bordered flex items-center gap-2 bg-white text-black rounded-l-xl md:w-96 md:h-11">
            <input type="text" className="grow" placeholder="Type here to search" />
          </label>
          <button className="btn md:w-24 md:h-13 bg-[#134B70] hover:scale-105 transition ease-out duration-300 hover:text-base text-white font-bold rounded-lg hover:bg-[#508C9B] border-none">
            Search
          </button>
        </div>
      </div>
      <h1 data-aos="flip-up" data-aos-delay="300" className="text-4xl font-bold md:mt-20 mt-10 md:ml-10 mb-12 text-center lg:px-96 md:px-32 ">Save more with  <span className="text-[#508C9B]">curated coupons</span> for <span className="text-[#508C9B]">top brands</span></h1>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 md:ml-9 pb-20 pt-4
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

