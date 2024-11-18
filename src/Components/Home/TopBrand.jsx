import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const TopBrand = ({ coupons }) => {
  console.log(coupons);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold px-20 my-8 -leading-8">
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

// {
//     "_id": "1",
//     "brand_name": "ShopMart BD",
//     "rating": 4.5,
//     "description": "ShopMart BD is the leading online marketplace in Bangladesh, offering a wide range of products from electronics to daily essentials.",
//     "brand_logo": "https://example.com/logos/shopmart.png",
//     "coupons": [
//         {
//             "coupon_code": "SHOP10",
//             "description": "Get 10% off on all items",
//             "expiry_date": "2024-12-31",
//             "condition": "Minimum purchase of 1000 BDT",
//             "coupon_type": "percentage"
//         }
//     ],
//     "shop_Link": "https://shopmartbd.com",
//     "category": "Marketplace",
//     "isSaleOn": true
// }
