import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Home/Slider";
import TopBrand from "../Components/Home/TopBrand";
import BrandOnSell from "../Components/Home/BrandOnSell";
import CouponTool from "../Components/Home/CouponTool";
import Reviews from "../Components/Home/Reviews";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const HomeLayout = () => {
  const coupons = useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <div className="font-Roboto">
      {/* title start*/}
      <div className="title md:mb-0 mb-8 animate__animated animate__backInLeft">
        {user ? (
          <>
            <div className="text-center md:text-5xl text-3xl font-bold text-white mt-5">
              Welcome, <span className="text-[#508C9B]"> {user.displayName}</span>
            </div>
            <p className="text-center md:text-base text-sm text-gray-500 mt-4 md:px-44 px-2">
            Explore the latest deals and discounts tailored just for you. Start saving today with your exclusive offers!
            </p>
          </>
        ) : (
          <>
            <div className="text-center md:text-5xl text-3xl font-bold text-white mt-5">
              <span className="text-[#508C9B] font-bold">Welcome</span> to{" "}
              <span className="text-[#508C9B]">CouponVault!</span>
            </div>
            <p className="text-center text-gray-500 mt-4 md:px-44 px-2">
              Join us to unlock exclusive coupons and save big on your favorite
              shops.
            </p>
          </>
        )}
      </div>
      {/* title end */}

      <Slider></Slider>

      <TopBrand coupons={coupons}></TopBrand>

      <BrandOnSell coupons={coupons}></BrandOnSell>

      <CouponTool></CouponTool>

      <Reviews></Reviews>
    </div>
  );
};

export default HomeLayout;
