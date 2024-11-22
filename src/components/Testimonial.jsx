import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonial
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 w-8/12 my-5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore
        repudiandae sequi a autem officia ducimus quae consectetur quaerat eos?
      </p>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16 lg:justify-between lg:flex-nowrap">
        {testimonialsData.map((testimonial, i) => (
          <div
            key={i}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (_, idx) => (
                <img key={idx} src={assets.star_icon} alt="star" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
