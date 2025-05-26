import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Header9 from "../layout/Header/Header9";
import USPS9 from "../components/USPS/USPS9";
import About9 from "../components/About/About9";
import Hero9 from "../components/Hero/Hero9";
import Products9 from "../components/Products/Products9";
import Testimonials9 from "../components/Testimonials/Testimonials9";
import Gallery9 from "../components/Gallery/Gallery9";
import Contact9 from "../components/Contact/Contact9";
import Footer9 from "../layout/Footer/Footer9";

const Template9 = () => {
  return (
    <ReactLenis root>
      <div className="bg-[#1f2022] ">
        <Header9 />
        <Hero9 />
        <USPS9 />
        <About9 />
        <Products9 />
        <Testimonials9 />
        <Gallery9 />
        <Contact9 />
        <Footer9 />
      </div>
    </ReactLenis>
  );
};

export default Template9;
