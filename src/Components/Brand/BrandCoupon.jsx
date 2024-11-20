import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Coupon from "./Coupon";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BrandCoupon = () => {
  const brands = useLoaderData(); 
  const params = useParams();
  console.log(brands);

  const singleBrand = brands.find(brand => brand._id === Number(params.id));
  console.log(singleBrand)
  console.log(singleBrand.coupons)


  // Destructure singleBrand for convenience
   const { brand_name, brand_logo, description, rating, coupons, shop_link } = singleBrand;

  return (
    <div>
      {/* Banner Section */}
      <div className="w-full bg-gradient-to-l from-[#090979] to-[#00d4ff] py-24 flex flex-col justify-center items-center rounded-3xl text-white mb-14">
        <h1 className="text-5xl font-bold text-center">
          Exclusive Coupons for{" "}
          <span className="text-[#7ab9f5]"> {brand_name}</span>
        </h1>
        <p className="text-base text-center pt-6 px-6 md:px-12 lg:px-72">
          Explore the latest deals and discounts from brand_name. Save more on
          your favorite products with our exclusive coupons. Copy the code and
          start saving instantly!
        </p>
        <NavLink to="/brand" className="btn bg-[#134B70] hover:scale-105 transition ease-out duration-300 hover:text-base text-white font-bold rounded-lg hover:bg-[#508C9B] mt-6">
            <FaArrowAltCircleLeft/> All Brand 
          </NavLink>
      </div>

      {/* company log */}
      <div className="flex justify-center items-center gap-5 py-20">
        <img src={brand_logo} alt="" />
        <div  className="border-l-2 border-white font-bold pl-4 h-full">
            <h3 className="text-2xl"> {brand_name}</h3>
            <p className="text-base">{description}</p>
            <p className="flex items-center gap-2">Rating: {rating}<FaStar className="text-yellow-500"></FaStar></p>
        </div>
      </div>

      {/* Coupons Section */}
      <h1 className="text-3xl font-bold pb-16 text-center">
        Explore exclusive deals crafted just for you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
        {coupons?.map((coupon, idx) => (
          <Coupon key={idx} coupon={coupon} shop_link={shop_link}/>
        ))}
      </div>
    </div>
  );
};

export default BrandCoupon;
