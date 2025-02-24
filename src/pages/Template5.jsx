import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Header5 from "../layout/Header/Header5";
import Footer5 from "../layout/Footer/Footer5";
import About5 from "../components/About/About5";
import Contact5 from "../components/Contact/Contact5";
import Hero5 from "../components/Hero/Hero5";
import USPS5 from "../components/USPS/USPS5";
import Products5 from "../components/Products/Products5";
import Testimonials5 from "../components/Testimonials/Testimonials5";
import Gallery5 from "../components/Gallery/Gallery5";

const Template5 = () => {
  return (
    <ReactLenis root>
      <div>
        <Header5 />
        <Hero5 />
        <USPS5 />
        <About5 />
        <Products5 />
        <Testimonials5 />
        <Gallery5 />
        <Contact5 />
        <Footer5 />
      </div>
    </ReactLenis>
  );
};

export default Template5;
