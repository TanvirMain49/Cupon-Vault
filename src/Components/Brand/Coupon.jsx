import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Coupon = ({ coupon, shop_link }) => {
  const {loader} = useContext(AuthContext);
  if(loader){
    return <span className="loading loading-spinner text-info text-center"></span>
}

  return (
    <div data-aos="zoom-out">
      <div className="container">
        <div className="bg-[#508C9B] text-white text-center py-10 px-11 rounded-lg shadow-md relative">
          <h3 className="text-2xl text-start font-semibold mb-2 whitespace-wrap">
            {coupon.description}
          </h3>
          <p className="mb-4 text-start">{coupon.condition}</p>

          {/* coupon code */}
          <div className="flex md:flex-row flex-col justify-start md:items-center md:gap-0 gap-4 space-x-2 mb-2">
            <div className="border-dashed border text-white px-4 md:mx-0 mx-1 py-2 font-bold rounded-l">
              {coupon.coupon_code}
            </div>

            {/* button section */}
            {/* copy button */}
            <CopyToClipboard
              text={coupon.coupon_code}
              onCopy={() => {
                // toast.success("Coupon Code Copied!");
                toast.success('Coupon Code Copied!');
              }}
              
            >
              <button className="btn border-2 border-[#134B70] bg-transparent hover:scale-105 transition ease-out duration-300 hover:text-base hover:bg-white text-[#134B70] font-bold rounded-lg hover:border-[#134B70]">
                Copy Code
              </button>
            </CopyToClipboard>
            {/* navigate to companyLink */}
            <NavLink to={shop_link} className="btn border-2 border-[#134B70] bg-transparent hover:scale-105 transition ease-out duration-300 hover:text-base hover:bg-white text-[#134B70] font-bold rounded-lg hover:border-[#134B70]">
              Use Now
            </NavLink>
          </div>
          {/* if coupon copied then it wil show the text */}
          {/* {copy && (
            <p className="text-green-500 text-start font-semibold text-sm mt-1 mb-4">
              Coupon Code Copied!
            </p>
          )} */}
          <p className="text-base font-bold text-start mt-8">
            Valid Till: {coupon.expiry_date}
          </p>

          <div className="w-12 h-12 bg-black rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
          <div className="w-12 h-12 bg-black rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
