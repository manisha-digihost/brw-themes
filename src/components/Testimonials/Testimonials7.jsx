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
    <section className="bg-[#1f2022] py-20">
      <div className="container-fluid mx-auto px-10">
        <div className="lg:w-[65%] mx-auto">
          <div className="text-center bs5-heading-sec">
            <h2 className="text-3xl text-white uppercase font-bold mb-2">
              Where Inovation Meet <br />
              Interior Design
            </h2>
          </div>
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
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper mt-16"
        >
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="flex gap-5 mb-3 ">
              <div className=" w-[60px] h-[60px]">
                <img
                  src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                  alt="Person"
                />
              </div>
              <div className="">
                <h4 className="text-[#fff] text-[22px] mb-1">John Abraham</h4>
                <h5 className="text-[#fff] uppercase">
                  patient of <span className="text-[#fff]">surgery</span>
                </h5>
              </div>
            </div>

            <div className="card lg:p-2  md:p-1 p-1">
              <p className="text-[#aeb0b4] text-[16px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="flex gap-5 mb-3 ">
              <div className=" w-[60px] h-[60px]">
                <img
                  src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                  alt="Person"
                />
              </div>
              <div className="">
                <h4 className="text-[#fff] text-[22px] mb-1">John Abraham</h4>
                <h5 className="text-[#fff] uppercase">
                  patient of <span className="text-[#fff]">surgery</span>
                </h5>
              </div>
            </div>

            <div className="card lg:p-2  md:p-1 p-1">
              <p className="text-[#aeb0b4] text-[16px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="flex gap-5 mb-3 ">
              <div className=" w-[60px] h-[60px]">
                <img
                  src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                  alt="Person"
                />
              </div>
              <div className="">
                <h4 className="text-[#fff] text-[22px] mb-1">John Abraham</h4>
                <h5 className="text-[#fff] uppercase">
                  patient of <span className="text-[#fff]">surgery</span>
                </h5>
              </div>
            </div>

            <div className="card lg:p-2  md:p-1 p-1">
              <p className="text-[#aeb0b4] text-[16px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="flex gap-5 mb-3 ">
              <div className=" w-[60px] h-[60px]">
                <img
                  src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                  alt="Person"
                />
              </div>
              <div className="">
                <h4 className="text-[#fff] text-[22px] mb-1">John Abraham</h4>
                <h5 className="text-[#fff] uppercase">
                  patient of <span className="text-[#fff]">surgery</span>
                </h5>
              </div>
            </div>

            <div className="card lg:p-2  md:p-1 p-1"></div>
          </SwiperSlide>
          <SwiperSlide className="relative p-8 border border-[#fff3]">
            <div className="flex gap-5 mb-3 ">
              <div className=" w-[60px] h-[60px]">
                <img
                  src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                  alt="Person"
                />
              </div>
              <div className="">
                <h4 className="text-[#fff] text-[22px] mb-1">John Abraham</h4>
                <h5 className="text-[#fff] uppercase">
                  patient of <span className="text-[#fff]">surgery</span>
                </h5>
              </div>
            </div>

            <div className="card lg:p-2  md:p-1 p-1">
              <p className="text-[#aeb0b4] text-[16px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials7;
