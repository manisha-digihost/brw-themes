import React from "react";

const Hero5 = () => {
  const slides = [
    {
      title: "Example headline.",
      description:
        "Some representative placeholder content for the first slide of the carousel.",
      buttonText: "Sign up today",
      buttonLink: "#",
    },
    {
      title: "Another example headline.",
      description:
        "Some representative placeholder content for the second slide of the carousel.",
      buttonText: "Learn more",
      buttonLink: "#",
    },
    {
      title: "One more for good measure.",
      description:
        "Some representative placeholder content for the third slide of this carousel.",
      buttonText: "Browse gallery",
      buttonLink: "#",
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
              <div className="absolute inset-0 bg-gray-600"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl opacity-75 mb-6 max-w-2xl text-lightAlt">
                  {slide.description}
                </p>
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

export default Hero5;
