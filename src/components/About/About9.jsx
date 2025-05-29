import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const About9 = () => {
  return (
    <section className="md:px-[2rem] md:px-16 px-5 py-10 bg-[#fff]">
      <div className=" mx-auto">
        <div className="flex flex-wrap">
        
          <div className="w-full lg:w-6/12 lg:p-20">
            <div className="mb-9 mt-7">
              <span className="text-sm text-[#000] mb-6 block">ENLIGHTEN YOUR HOME</span>
              <h2 className="text-4xl text-[#0B2239] font-600 mb-2">Luminous Living: Innovative
                Lighting Designs</h2>
            </div>
            <div className="mb-6">
              <p className="text-[#555555] mb-8 text-[16px] font-400">
                Most of the style’s furniture has a touch of modern European
                furniture with a simple design to create harmony with the dark
                interior design…
              </p>
                 <a href="#!" className="btn px-5 py-2 border bg-dark hover:text-dark border-dark hover:bg-[#fff] font-normal text-white rounded-[20px] f text-[1rem]  transition duration-300 ease-in-out">
                Shop Now
              </a>
         
            </div>
                
          </div>
            <div className="w-full lg:w-6/12">
            <div className="pr-0 lg:pl-10 mb-8 lg:mb-0 w-100 h-100" >
              <div className="relative w-100 h-100">
                  <figure className="w-100 h-100">
                    <img className="w-100 h-100 object-cover rounded-[20px]" src="https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-17.jpg?v=1721791519" alt="" />
                  </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About9;
