import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    dots: true,
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-lightAlt py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </div>
        <Slider {...settings}>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">Efecha Omoware</h4>
                  <p className="text-gray-600">
                    I now enjoy financial freedom like I've never known before
                    doing what I love.I now enjoy financial freedom like I've
                    never known before doing what I love.I now enjoy financial
                    freedom like I've never known before doing what I love.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
