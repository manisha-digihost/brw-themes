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

const Hero8 = () => {
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
              {/* <div className="rounded">
                <FaPlay />
              </div> */}
              <div className="absolute inset-0">
                <img src={slide.image} alt="Hero" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 w-[65%] mx-auto z-10 uppercase">
                <h1 className="text-[3.9rem] font-bold mb-4 text-light">
                  {slide.title}
                </h1>
                <a href={slide.buttonLink} className="bs7-button">
                  <span>
                    {slide.buttonText}
                    <span className="text-[18px] ms-1 inline-block">
                      <GoArrowUpRight />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero8;
