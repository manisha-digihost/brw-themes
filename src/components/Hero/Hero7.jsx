import React from "react";
import banner2 from "../../assets/images/thumb-1.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero7 = () => {
  const slides = [
    {
      title: "Dedicated Team Exceptional unique architecture Design Idea",
      // description:
      //   "Some representative placeholder content for the first slide of the carousel.",
      buttonText: "More Details",
      buttonLink: "#",
      image: "src/assets/images/hero/1.jpg",
    },
    {
      title: "Dedicated Team Exceptional unique architecture Design Idea",
      // description:
      //   "Some representative placeholder content for the second slide of the carousel.",
      buttonText: "More Details",
      buttonLink: "#",
      image: "src/assets/images/hero/2.jpg",
    },
    {
      title: "Dedicated Team Exceptional unique architecture Design Idea",
      // description:
      //   "Some representative placeholder content for the third slide of this carousel.",
      buttonText: "More Details",
      buttonLink: "#",
      image: "src/assets/images/hero/1.jpg",
    },
  ];

  return (
    <div className="relative h-screen mb-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full bg-darkAlt after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-[0.8]">
              <div className="absolute inset-0">
                <img src={slide.image} alt="Hero" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 w-[65%] mx-auto z-10 uppercase">
                <h1 className="text-[3.9rem] font-bold mb-4 text-light">
                  {slide.title}
                </h1>
                <a href={slide.buttonLink} className="bs7-button">
                  {slide.buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    className="svg2"
                  >
                    <path
                      d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero7;
