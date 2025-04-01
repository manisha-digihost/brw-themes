import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Header7 from "../layout/Header/Header7";
import USPS7 from "../components/USPS/USPS7";
import About7 from "../components/About/About7";
import Hero7 from "../components/Hero/Hero7";
import Products7 from "../components/Products/Products7";
import Testimonials7 from "../components/Testimonials/Testimonials7";
import Gallery7 from "../components/Gallery/Gallery7";
import Contact7 from "../components/Contact/Contact7";
import Footer7 from "../layout/Footer/Footer7";

const Template7 = () => {
  return (
    <ReactLenis root>
      <div>
        <Header7 />
        <Hero7 />
        <USPS7 />
        <About7 />
        <Products7 />
        <Testimonials7 />
        <Gallery7 />
        <Contact7 />
        <Footer7 />
      </div>
    </ReactLenis>
  );
};

export default Template7;
