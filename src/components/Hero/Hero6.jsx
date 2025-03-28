import React from "react";
import banner2 from "../../assets/images/thumb-1.png";
import { Link } from "react-router-dom";

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
    <div className="py-24 pb-0 bg-[#07d9d6] relative">
      <div className="px-8 md:pl-10 sm:pl-3 lg:pl-32 ">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center">
          <div className="my-20 lg:my-0 md:my-5">
            <h2 className="text-7xl mb-6 text-white leading-none font-semibold">Expert medical care and treatment</h2>
            <p className="text-xl text-white">The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched.</p>
            <Link className="bg-white py-3 transition-all ease-in-out px-8 text-base block hover:bg-black hover:text-white w-fit rounded-3xl mt-6">Contact Us</Link>
          </div>
          <div className="ps-14 relative h-100 ">
            <div className={`flex justify-center   after:[''] after:absolute after:w-[100%] lg:after:h-[100%] after:h-[100%] after:bg-[url('https://validthemes.net/site-template/medihub/assets/img/shape-2.png')] after:bg-no-repeat after:bottom-[0] after:left-[-5px]`}>
              <img
                src={banner2}
                className=" lg:h-screen h-[60%] object-contain relative z-10"
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
