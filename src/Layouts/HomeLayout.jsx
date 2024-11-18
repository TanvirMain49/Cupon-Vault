import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Home/Slider";
import TopBrand from "../Components/Home/TopBrand";
import BrandOnSell from "../Components/Home/BrandOnSell";
const HomeLayout = () => {
  const coupons = useLoaderData();
  return (
    <div className="font-Roboto">
        {/* title start*/}
      <div className="title">
        <div className="text-center text-5xl font-bold text-white mt-5">
          <span className="text-red-700 font-bold">Welcome</span> to{" "}
          <span className="text-[#D4AF37]">CouponVault!</span>
        </div>
        <p className="text-center text-gray-500 mt-2">
          Join us to unlock exclusive coupons and save big on your favorite
          shops.
        </p>
      </div>
      {/* title end */}

      <Slider></Slider>

      <TopBrand coupons={coupons}></TopBrand>

      <BrandOnSell coupons={coupons}></BrandOnSell>
    </div>
  );
};

export default HomeLayout;
