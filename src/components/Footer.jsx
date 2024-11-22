import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        {/* Logo Section */}
        <div className="flex  flex-col items-center space-x-3">
          <img src={assets.ontoz} alt="Logo" className="w-12 h-12" /> <br />
          <span className="text-white text-3xl font-bold">Ontoz</span>
          <p className="w-60 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse
            laborum voluptatibus at sequi accusantium? Asperiores quisquam autem
            aut non.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a
            href="#About"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            About
          </a>
          <a
            href="#Projects"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Testimonials
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center lg:text-right">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
