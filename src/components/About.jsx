import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under  font-light">
          Our Company
        </span>
      </h1>
      <p>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, rerum.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-20">
        <div>
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            officia velit a, molestias dolore eius. Aut error corporis eos nam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            officia velit a, molestias dolore eius. Aut error corporis eos nam.{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            officia velit a, molestias dolore eius. Aut error corporis eos nam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            officia velit a, molestias dolore eius. Aut error corporis eos nam.
          </p>
          <button className="btn bg-blue-400 text-white rounded-3xl mt-5">
            Learn More
          </button>
        </div>

        <img
          className=" w-10/12 mx-auto sm:w-1/2 max-w-lg h-96"
          src={assets.brand_img}
          alt=""
        />
      </div>

      <div className=" w-full mt-5 bg-slate-100 border-b rounded-3xl border-blue-500 p-10">
        <div className="grid grid-cols-4 gap-6 md:gap-10 w-full 2xl:pr-28">
          <div>
            <p className=" text-4xl font-medium text-gray-800">10+</p>
            <p>Years of Experience </p>
          </div>
          <div>
            <p className=" text-4xl font-medium text-gray-800">10+</p>
            <p>Years of Experience </p>
          </div>
          <div>
            <p className=" text-4xl font-medium text-gray-800">10+</p>
            <p>Years of Experience </p>
          </div>
          <div>
            <p className=" text-4xl font-medium text-gray-800">10+</p>
            <p>Years of Experience </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
