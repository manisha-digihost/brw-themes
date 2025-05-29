import { section } from "motion/react-client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Pagination } from "swiper/modules";
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Gallery9 = () => {
  return (
    <section className="bg-[#fff]  py-20">

         <div className="text-left px-4 md:px-[2rem]">
              <h2 className="text-[30px] leading-[35px] font-bold text-black">Our Gallery</h2>
            </div>
          <div>
                   <Swiper
              slidesPerView={2}
              spaceBetween={10}
              // pagination={{
              //   clickable: true,
              // }},
              loop={true}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              // modules={[Pagination]}
              className="mySwiper mt-8" >
              <SwiperSlide className="relative border border-[#fff3]">
                <div className="">
                  <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-1_360x.jpg?v=1721792499" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative border border-[#fff3]">
                <div className="">
                  <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-2_360x.jpg?v=1721792499" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative border border-[#fff3]">
                <div className="">
                  <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-3_360x.jpg?v=1721792499" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative border border-[#fff3]">
                <div className="">
                  <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-4_360x.jpg?v=1721792499" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative border border-[#fff3]">
                <div className="">
                  <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-5_360x.jpg?v=1721792499" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative border border-[#fff3]">
                <div className="">
                  <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-6_360x.jpg?v=1721792499" alt="" />
                </div>
              </SwiperSlide>
              
             
             
          
          </Swiper>
          </div>
      
    </section>
  );
};

export default Gallery9;
