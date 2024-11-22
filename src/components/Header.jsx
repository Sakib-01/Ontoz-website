import React from "react";
import headerImg from "../../src/assets/img/header_img.webp";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Header"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Navbar></Navbar>
      <div className=" relative z-10  container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white ">
        <h2 className="text-5xl sm:text-6xl md:text[80px] inline-block max-w-3xl font-semibold pt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit..
        </h2>
        <div className=" mt-10">
          <button className="btn bg-transparent text-white mr-5 hover:text-blue-700">
            <a href="#Projects">Projects</a>
          </button>
          <button className=" btn bg-blue-600 hover:text-black text-white">
            <a href="#Contact">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
