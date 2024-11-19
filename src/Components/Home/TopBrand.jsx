import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const TopBrand = ({ coupons }) => {
  console.log(coupons);
  return (
    <div className="mb-24">
      <h1 className="text-center text-5xl font-bold px-20 my-20 -leading-8">
        Trusted by Users and{" "}
        <span className="text-[#78B3CE]">Top Companies</span> Across Bangladesh
        to Find the <span className="text-[#78B3CE]">Best Coupons</span>
      </h1>

      <Marquee pauseOnHover="true" speed ="180">
        <div className="flex items-center gap-6 ">
          {coupons.map((coupon) => (
            <NavLink to='/brand' className="flex flex-col justify-center items-center cursor-pointer grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <img
                src={coupon.brand_logo}
                alt=""
                className="w-32 h-32 rounded-full border-2 border-yellow-500 p-2"
              />
              <p className="font-bold text-lg text-center mx-7 mt-2">{coupon.brand_name}</p>
            </NavLink>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrand;
