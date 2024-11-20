import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BrandCard = ({ brand }) => {

  const {user} = useContext(AuthContext);
  return (
    <div className="card card-compact bg-base-100 md:w-96 border border-white/40 rounded-2xl  hover:shadow-lg hover:shadow-[#201E43]">
      
      <figure className="p-2">
        <img
          src={brand.brand_logo}
          alt="Shoes"
          className="h-64 w-full p-4 rounded-e-lg object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-6">
          <h2 className="card-title md:text-3xl text-2xl font-bold">{brand.brand_name}</h2>
          {
            brand.isSaleOn?<div className="text-green-400 text-base font-semibold animate-bounce border border-green-400 rounded-xl px-2 w-24 "> 
            Sale is On!
          </div>
          : <div className="text-red-500 text-base font-semibold border border-red-400 rounded-xl md:px-2 px-1 w-24 "> Sale is Off</div>
          }
        </div>
        <p className="text-base">{brand.description}</p>
        <p className="flex items-center text-lg mr-4 font-semibold">
          Rating: {brand.rating}
          <div className="rating ml-2">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-400"
            />
          </div>
        </p>
        <div className="card-actions justify-start">
          <NavLink 
          to={`/brand/${brand._id}`}
          className="btn border-2 border-[#134B70] bg-transparent hover:scale-105 transition ease-out duration-300 hover:text-base hover:bg-white text-[#134B70] font-bold rounded-lg hover:border-[#134B70] mb-6 mt-2">View Coupon</NavLink>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

// "_id": "1",
//         "brand_name": "ShopMart BD",
//         "rating": 4.5,
//         "description": "ShopMart BD is the leading online marketplace in Bangladesh, offering a wide range of products from electronics to daily essentials.",
//         "brand_logo": "https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg?semt=ais_hybrid",
//         "coupons": [
//             {
//                 "coupon_code": "SHOP10",
//                 "description": "Get 10% off on all items",
//                 "expiry_date": "2024-12-31",
//                 "condition": "Minimum purchase of 1000 BDT",
//                 "coupon_type": "percentage"
//             },
//             {
//                 "coupon_code": "SHOP20",
//                 "description": "Get 20% off on electronics",
//                 "expiry_date": "2024-12-15",
//                 "condition": "Minimum purchase of 5000 BDT",
//                 "coupon_type": "percentage"
//             }
//         ],
//         "shop_Link": "https://shopmartbd.com",
//         "category": "Marketplace",
//         "isSaleOn": true,
//         "total_coupons": "2"
