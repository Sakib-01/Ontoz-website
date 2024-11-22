import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SIster_Concern from "../components/SIster_Concern";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Works></Works>
      <Testimonial></Testimonial>
      <SIster_Concern></SIster_Concern>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
