import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Header8 from "../layout/Header/Header8";
import USPS8 from "../components/USPS/USPS8";
import About8 from "../components/About/About8";
import Hero8 from "../components/Hero/Hero8";
import Products8 from "../components/Products/Products8";
import Testimonials8 from "../components/Testimonials/Testimonials8";
import Gallery8 from "../components/Gallery/Gallery8";
import Contact8 from "../components/Contact/Contact8";
import Footer8 from "../layout/Footer/Footer8";

const Template8 = () => {
  return (
    <ReactLenis root>
      <div className="bg-[#1f2022] ">
        <Header8 />
        <Hero8 />
        <USPS8 />
        <About8 />
        <Products8 />
        <Testimonials8 />
        <Gallery8 />
        <Contact8 />
        <Footer8 />
      </div>
    </ReactLenis>
  );
};

export default Template8;
