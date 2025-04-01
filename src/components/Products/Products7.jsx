import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Products7 = () => {
  const productlist = [
    {
      title: "Modern design",
      disl: "Said be brought bel also fills kind face creepeth gathired their sine good under is beast.",
      icon: <FaClock />,
      color: "red",
    },
    {
      title: "Digital Marketing",
      disl: "Said be brought bel also fills kind face creepeth gathired their sine good under is beast.",
      icon: <FaAward />,
      color: "blue",
    },
    {
      title: "UI/UX Strategy",
      disl: "Said be brought bel also fills kind face creepeth gathired their sine good under is beast.",
      icon: <FaHeadset />,
      color: "green",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-9 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl uppercase font-bold mb-2">
            Centres of{" "}
            <span className=" text-center text-[#07d9d6]">Excellence</span>
          </h2>
          <span className="text-sm text-black-600  ">
            While mirth large of on front. Ye he greater related adapted proceed
            entered an. Through it examine express promise no. Past add size
            game cold girl off how old
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* First Card */}
          {productlist.map((item, index) => (
            <div className=" p-8  bg-blue-50 text-center transition duration-150 ease-linear group rounded-xl overflow-hidden relative">
              <div className="absolute h-2 w-full left-0 transition duration-150 ease-linear group-hover:h-full top-0 bg-[#0cb8b6]"></div>
              <div className="relative z-1">
                <h3 className="text-xl text-black transition duration-150 ease-linear group-hover:text-white font-semibold mt-6 mb-8">
                  {item.title}
                </h3>
                <div className="relative inline-block mb-8 border-[#0cb8b6] transition duration-150 ease-linear group-hover:border-white border p-1 rounded-full">
                  <div className="relative z-10   bg-[#0cb8b6] transition duration-150 ease-linear group-hover:bg-white group-hover:text-[#0cb8b6] text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg">
                    {item.icon}
                  </div>
                  {/* <div className={`absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-${item.color}-300 rounded-full `}></div> */}
                </div>
                <p className="text-gray-500 transition duration-150 ease-linear group-hover:text-white mt-3 leading-8">
                  {item.disl}
                </p>
                <div className="justify-center flex ">
                  <Link className="text-black transition duration-150 ease-linear group-hover:text-white group-hover:border-white  py-3 transition-all ease-in-out px-8 border-[#0cb8b6] border flex a hover:bg-[#0cb8b6] hover:text-white w-fit rounded-3xl mt-6">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products7;
