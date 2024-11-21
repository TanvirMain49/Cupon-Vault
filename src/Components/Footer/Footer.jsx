import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-wrap justify-around items-start bg-[#134B70] text-white p-10 md:pl-52 md:mt-32 mt-20">
      {/* Brand Section */}
      <div className="md:w-1/3 w-full ">
        <a className="text-3xl font-bold italic mb-4 inline-block">
          CouponVault
        </a>
        <p className="text-sm mt-2">
          Your one-stop destination for the best coupons and discounts in
          Bangladesh.
          <br />
          Save smartly with us since <span className="font-semibold">2024</span>
          .
        </p>
      </div>

      {/* Quick Links */}
      <div className="md:w-1/3 w-full mt-6 md:mt-0">
        <h5 className="footer-title text-xl font-semibold mb-4">Quick Links</h5>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/" className="hover:text-[#E9A32C] transition-all">
              Home
            </a>
          </li>
          <li>
            <a href="/brand" className="hover:text-[#E9A32C] transition-all">
              Top Brands
            </a>
          </li>
          <li>
            <a href="/aboutDev" className="hover:text-[#E9A32C] transition-all">
              About Developer
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:text-[#E9A32C] transition-all">
              My Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="md:w-1/3 w-full mt-6 md:mt-0">
        <h5 className="footer-title text-xl font-semibold mb-4 md:ml-28">Follow Us</h5>
        <div className="flex gap-4 text-3xl md:ml-28">
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
        </div>
        <aside className="mt-2">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
      </div>


    </footer>
  );
};

export default Footer;
