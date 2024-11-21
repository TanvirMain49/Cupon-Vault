import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import "aos/dist/aos.css"; 
import AOS from "aos";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: "ease-in-out", // Easing function (optional)
      once: true, // Animation will only run once
    });
  }, []);
  return (
    <div className="font-Roboto">
      <header className="md:w-11/12 mx-auto md:py-8">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
