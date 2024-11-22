import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Works></Works>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
