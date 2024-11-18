import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Home/Slider";
import TopBrand from "../Components/Home/TopBrand";
const HomeLayout = () => {
  const coupons = useLoaderData();
  console.log(coupons);
  return (
    <div>
        {/* title */}
      <div className="title">
        <div className="text-center text-4xl font-semibold text-white mt-10">
          <span className="text-red-700 font-bold">Welcome</span> to{" "}
          <span className="text-[#D4AF37]">CouponVault!</span>
        </div>
        <p className="text-center text-gray-500 mt-2">
          Join us to unlock exclusive coupons and save big on your favorite
          shops.
        </p>
      </div>
      <Slider></Slider>
      <TopBrand coupons={coupons}></TopBrand>
    </div>
  );
};

export default HomeLayout;
