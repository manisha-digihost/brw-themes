import React from "react";
import banner from "../../assets/images/banner5.webp";

const Hero6 = () => {
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
    <div className="py-24 bg-[#edf1fa] relative">
      <div className="">
        <div className="grid grid-cols-2 items-center">
          <div className="pl-5 after:[''] after:absolute after:w-[100px] after:h-[100px] after:bg-[url('https://html.webtend.net/cantus/assets/img/shape/01.png')] after:bg-no-repeat after:top-[26%] after:left-5 before:[''] before:absolute before:w-[100px] before:h-[100px] before:bg-[url('https://html.webtend.net/cantus/assets/img/shape/04.png')] before:bg-no-repeat before:top-[22.5%] before:left-[40%]">
            <h4 className="mb-6 text-gray-400 text-[27px] font-semibold border-b-[1px] border-gray-400 inline-block pb-0 leading-[1.2]">
              Making your Brand
            </h4>
            <h2 className="text-black text-[100px] font-bold pb-0 uppercase line leading-[0.92] mb-16 mt-3">
              Creating <br />{" "}
              <span className="text-[55px] font-semibold normal-case me-6 border-b-[3px] border-black leading-[1] inline-block">
                {" "}
                Unique
              </span>
              Ideas
            </h2>
            <button className="base-tm5-button">Hire us Now</button>
          </div>
          <div className="ps-14 relative">
            <div className="overflow-hidden shadow-[0_0_12px_1px_#00000017] rounded-tl-[65%] border-white border-[20px] border-r-0 h-[50rem] shadow-[0 0 12px 1px #00000017] after:[''] after:absolute after:w-[50%] after:h-[35%] after:bg-[url('https://html.webtend.net/cantus/assets/img/shape/03.png')] after:bg-no-repeat after:bottom-[0] after:left-[-5px]">
              <img
                src={banner}
                className="w-full border h-full object-cover"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
