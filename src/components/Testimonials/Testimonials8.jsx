import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import videobanner from "./../../assets/images/video-bg.webp";

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

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Testimonials7 = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-20 px-16 bg-[#fdf7ee]">
      <div className="container-fluid mx-auto">
        <div className="text-center">
              <span className="text-lg text-[#FE704B] ">Testimonial</span>
              <h2 className="text-4xl text-[#0B2239] font-600 mb-2">Our Customer Said<strong> About Pet Care</strong></h2>
              <p className="text-[#555555]">Conveniently customize proactive services leveraged without <br /> continualliery aggregate fricctionle ou wellies</p>
            </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper mt-8" >
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
              <div className="">
                <figure>
                  <img src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/testimonial/03.jpg" alt="" />
                </figure>
              </div>
              <div className="flex flex-col justify-center">
                <div className=" gap-5 mb-3 ">
                  <div className=" w-[60px] h-[60px]">
                    <img
                      src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/testimonial/quote2.png"
                      alt="Person"
                    />
                  </div>
                
                  </div>
            
             

                <div className="card lg:p-2  md:p-1 p-1">
                  <p className="text-[#555555] text-[16px]">
                  Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Continually productize compelling  quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <div className=" w-[60px] h-[60px]">
                    <img
                      src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                      alt="Person"
                    />
                  </div>
                  <div className="">

                    <h4 className="text-[#0B2239] text-[20px] font-[600] mb-1">John Abraham</h4>
                    <h5 className="text-[#555555] uppercase">
                      patient of <span className="text-[#fff]">surgery</span>
                    </h5>
                    
                  </div>
                </div>
                
                 
              </div>
            </div>
          
          </SwiperSlide>
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
              <div className="">
                <figure>
                  <img src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/testimonial/03.jpg" alt="" />
                </figure>
              </div>
              <div className="flex flex-col justify-center">
                <div className=" gap-5 mb-3 ">
                  <div className=" w-[60px] h-[60px]">
                    <img
                      src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/testimonial/quote2.png"
                      alt="Person"
                    />
                  </div>
                
                  </div>
            
             

                <div className="card lg:p-2  md:p-1 p-1">
                  <p className="text-[#555555] text-[16px]">
                  Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Continually productize compelling  quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <div className=" w-[60px] h-[60px]">
                    <img
                      src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                      alt="Person"
                    />
                  </div>
                  <div className="">

                    <h4 className="text-[#0B2239] text-[20px] font-[600] mb-1">John Abraham</h4>
                    <h5 className="text-[#555555] uppercase">
                      patient of <span className="text-[#fff]">surgery</span>
                    </h5>
                    
                  </div>
                </div>
                
                 
              </div>
            </div>
          
          </SwiperSlide>
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
              <div className="">
                <figure>
                  <img src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/testimonial/03.jpg" alt="" />
                </figure>
              </div>
              <div className="flex flex-col justify-center">
                <div className=" gap-5 mb-3 ">
                  <div className=" w-[60px] h-[60px]">
                    <img
                      src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/testimonial/quote2.png"
                      alt="Person"
                    />
                  </div>
                
                  </div>
            
             

                <div className="card lg:p-2  md:p-1 p-1">
                  <p className="text-[#555555] text-[16px]">
                  Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Continually productize compelling  quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <div className=" w-[60px] h-[60px]">
                    <img
                      src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                      alt="Person"
                    />
                  </div>
                  <div className="">

                    <h4 className="text-[#0B2239] text-[20px] font-[600] mb-1">John Abraham</h4>
                    <h5 className="text-[#555555] uppercase">
                      patient of <span className="text-[#fff]">surgery</span>
                    </h5>
                    
                  </div>
                </div>
                
                 
              </div>
            </div>
          
          </SwiperSlide>
         
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials7;
