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
      buttonText: "Sign up today",
      buttonLink: "#",
      image: "src/assets/images/hero/1.jpg",
    },
    {
      title: "Dedicated Team Exceptional unique architecture Design Idea",
      // description:
      //   "Some representative placeholder content for the second slide of the carousel.",
      buttonText: "Learn more",
      buttonLink: "#",
      image: "src/assets/images/hero/2.jpg",
    },
    {
      title: "Dedicated Team Exceptional unique architecture Design Idea",
      // description:
      //   "Some representative placeholder content for the third slide of this carousel.",
      buttonText: "Browse gallery",
      buttonLink: "#",
      image: "src/assets/images/hero/1.jpg",
    },
  ];

  return (
    <div className="relative h-[500px] mb-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full bg-darkAlt">
              <div className="absolute inset-0">
                <img src={slide.image} alt="Hero" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 w-[70%] mx-auto">
                <h1 className="text-[50px] md:text-[50px] font-bold mb-4 text-light">
                  {slide.title}
                </h1>
                {/* <h2 class="text-4xl md:text-5xl font-bold mb-4 text-light"></h2> */}
                {/* <p className="text-lg md:text-xl opacity-75 mb-6 max-w-2xl text-lightAlt">
                  {slide.description}
                </p> */}
                <a href={slide.buttonLink} className="btn-primary">
                  {slide.buttonText}
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
