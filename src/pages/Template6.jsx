import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Header6 from "../layout/Header/Header6";
import Footer6 from "../layout/Footer/Footer6";
import About6 from "../components/About/About6";
import Contact6 from "../components/Contact/Contact6";
import Hero6 from "../components/Hero/Hero6";
import USPS6 from "../components/USPS/USPS6";
import Products6 from "../components/Products/Products6";
import Testimonials6 from "../components/Testimonials/Testimonials6";
import Gallery6 from "../components/Gallery/Gallery6";

const Template6 = () => {
  return (
    <ReactLenis root>
      <div>
        <Header6 />
        <Hero6 />
        <USPS6 />
        <About6 />
        <Products6 />
        <Testimonials6 />
        <Gallery6 />
        <Contact6 />
        <Footer6 />
      </div>
    </ReactLenis>
  );
};

export default Template6;
