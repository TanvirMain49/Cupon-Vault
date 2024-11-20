import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { NavLink } from "react-router-dom";

const Coupon = ({ coupon, shop_link }) => {
  const [copy, setCopy] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="bg-[#508C9B] text-white text-center py-10 px-11 rounded-lg shadow-md relative">
          <h3 className="text-2xl text-start font-semibold mb-2 whitespace-wrap">
            {coupon.description}
          </h3>
          <p className="mb-4 text-start">{coupon.condition}</p>

          {/* coupon code */}
          <div className="flex flex-row justify-start items-center space-x-2 mb-2">
            <div className="border-dashed border text-white px-4 py-2 font-bold rounded-l">
              {coupon.coupon_code}
            </div>

            {/* button section */}
            {/* copy button */}
            <CopyToClipboard
              text={coupon.coupon_code}
              onCopy={() => setCopy(true)}
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
          {copy && (
            <p className="text-green-500 text-start font-semibold text-sm mt-1 mb-4">
              Coupon Code Copied!
            </p>
          )}
          <p className="text-base font-bold text-start">
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