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

const Testimonials9 = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-20 px-16 bg-[#fff]">
      <div className="container-fluid mx-auto">
       
           <h2 className="text-[30px] leading-[35px] font-bold text-black">Testimonial</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="">
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
             
                 
                  <div className="flex flex-col relative justify-center">
                    <div className="absolute top-[5px] left-[-32px]">
                      <div className=" w-[35px] h-[35px]">
                        <img
                          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/quote.svg?v=1721704816"
                          alt="Person"
                        />
                      </div>
                    </div>
                    <div className="card lg:p-2  md:p-1 p-1">
                      <p className="text-[#000] text-[18px] 	leading-loose">
                      Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Continually productize compelling  quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating
                      </p>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <h4 className="text-[#000] text-[20px] font-[600] mb-1">John Abraham        <h5 className="text-[#000] inline ml-2 text-[16px] font-normal uppercase">
                          CEO & Founder
                        </h5></h4>
                    </div>
                  </div>
            
              
              </SwiperSlide>
              <SwiperSlide className="relative p-8 border border-[#fff3]">
             
                 
                  <div className="flex flex-col relative justify-center">
                    <div className="absolute top-[5px] left-[-32px]">
                      <div className=" w-[35px] h-[35px]">
                        <img
                          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/quote.svg?v=1721704816"
                          alt="Person"
                        />
                      </div>
                    </div>
                    <div className="card lg:p-2  md:p-1 p-1">
                      <p className="text-[#000] text-[18px] 	leading-loose">
                      Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Continually productize compelling  quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating
                      </p>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <h4 className="text-[#000] text-[20px] font-[600] mb-1">John Abraham        <h5 className="text-[#000] inline ml-2 text-[16px] font-normal uppercase">
                          CEO & Founder
                        </h5></h4>
                    </div>
                  </div>
            
              
              </SwiperSlide>
              <SwiperSlide className="relative p-8 border border-[#fff3]">
             
                 
                  <div className="flex flex-col relative justify-center">
                    <div className="absolute top-[5px] left-[-32px]">
                      <div className=" w-[35px] h-[35px]">
                        <img
                          src="https://wpbingo-darion.myshopify.com/cdn/shop/files/quote.svg?v=1721704816"
                          alt="Person"
                        />
                      </div>
                    </div>
                    <div className="card lg:p-2  md:p-1 p-1">
                      <p className="text-[#000] text-[18px] 	leading-loose">
                      Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Continually productize compelling  quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating
                      </p>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <h4 className="text-[#000] text-[20px] font-[600] mb-1">John Abraham        <h5 className="text-[#000] inline ml-2 text-[16px] font-normal uppercase">
                          CEO & Founder
                        </h5></h4>
                    </div>
                  </div>
            
              
              </SwiperSlide>
             
          
          </Swiper>
          </div>
          <div className="">
            <div className="pr-0 lg:pl-10 mb-8 lg:mb-0 w-100 h-100" >
              <div className="relative w-100 h-100">
                  <figure className="w-100 h-100">
                    <img className="w-100 h-100 object-cover rounded-[20px]" src="https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-16.jpg?v=1721717190" alt="" />
                  </figure>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials9;
