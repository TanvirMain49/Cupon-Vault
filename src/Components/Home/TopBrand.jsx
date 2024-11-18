import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const TopBrand = ({ coupons }) => {
  console.log(coupons);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold px-20 my-16 -leading-8">
        Trusted by Users and{" "}
        <span className="text-[#D4AF37]">Top Companies</span> Across Bangladesh
        to Find the <span className="text-[#D4AF37]">Best Coupons</span>
      </h1>

      <Marquee pauseOnHover="true" speed ="100">
        <div className="flex items-center gap-6 ">
          {coupons.map((coupon) => (
            <NavLink to='/brand' className="flex flex-col justify-center items-center cursor-pointer">
              <img
                src={coupon.brand_logo}
                alt=""
                className="w-20 h-20 rounded-full border-2 border-yellow-500 p-2"
              />
              <p className="font-bold text-center mx-5">{coupon.brand_name}</p>
            </NavLink>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrand;
