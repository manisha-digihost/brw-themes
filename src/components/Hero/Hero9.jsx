import React from "react";
import banner2 from "../../assets/images/thumb-1.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoArrowUpRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const Hero9 = () => {
   const slides = [
      {
      image:
        "	https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-3-3.jpg?v=1721617077",
      title: `Unveiling The  Poetry Of Interior Expression`,
      description:
        "Providing the best financial solutions for your business growth",
      buttonText: "Shop Now",
    },
    {
      image:
        "https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-3-2.jpg?v=1721617076",
      title: "Ailored Comfort:  Customized Interior Styling",
      description: "Expert guidance to help you achieve your financial goals",
      buttonText: "Shop Now",
    },
    {
      image:
        "https://wpbingo-darion.myshopify.com/cdn/shop/files/slider-3-1.jpg?v=1721617076",
      title: "Unveiling The Poetry Of Interior Expression",
      description:
        "Join our satisfied clients and experience excellence in service",
      buttonText: "Shop Now",
    },
  ]
 
  return (
    <div className="relative h-screen ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 5000 }}
        autoplay={false}
        loop={false}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full bg-darkAlt after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-[0.2]">
              {/* <div className="rounded">
                <FaPlay />
              </div> */}
              <div className="absolute inset-0">
                <img src={slide.image} alt="Hero" className="h-full object-cover" />
              </div>
              <div className="absolute inset-0 flex flex-col  justify-center  text-white p-4  mx-auto z-10 uppercase">
                <div className="grid grid-cols-12 gap-4">
                  <div className="lg:col-span-5 md:col-span-5 col-span-12">
                    <div>
                      <h1 className="text-[2.5rem] font-bold mb-4 text-light">
                  {slide.title}
                </h1>
                <a href="#!" className="btn px-5 py-2 border hover:text-dark border-white hover:bg-[#fff] font-normal text-white rounded-[20px] f text-[1rem]  transition duration-300 ease-in-out">
                Register Now
              </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero9;
