import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import serv1 from "./../../assets/images/product/services-1-1.jpg";
import serv2 from "./../../assets/images/product/services-1-2.jpg";
import serv3 from "./../../assets/images/product/services-1-3.jpg";

const Products7 = () => {
  const productlist = [
    {
      title: "Evolve Space Designs",
      disl: "A corporate business entity is an oit organization formed with the a mans a",
      url: serv1,
    },
    {
      title: "Eden Home Styling",
      disl: "A corporate business entity is an oit organization formed with the a mans a",
      url: serv2,
    },
    {
      title: "Harmony Interiors",
      disl: "A corporate business entity is an oit organization formed with the a mans a",
      url: serv3,
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="mx-auto px-6">
        <div className="mb-9 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-white uppercase font-bold mb-2">
            Where Inovation Meet <br />
            Interior Design
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* First Card */}
          {productlist.map((item, index) => (
            <div className=" pb-8 bg-[#1f2022] text-center transition duration-150 ease-linear group rounded-[18px] overflow-hidden relative">
              {/* <div className="absolute h-2 w-full left-0 transition duration-150 ease-linear group-hover:h-full top-0 bg-[#0cb8b6]"></div> */}
              <div className="relative z-1 px-8 ">
                <h3 className="text-xl uppercase text-white transition duration-150 ease-linear  font-semibold mt-6 mb-6">
                  {item.title}
                </h3>
                <div className="relative inline-block mb-8 border-[#0cb8b6] transition duration-150 ease-linear   p-1 rounded-full">
                  <div className="relative z-10   bg-[#0cb8b6] transition duration-150 ease-linear group-hover:bg-white group-hover:text-[#0cb8b6] text-white  flex items-center justify-center text-3xl shadow-lg">
                    <img src={item.url} alt="" />
                  </div>
                  {/* <div className={`absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-${item.color}-300 rounded-full `}></div> */}
                </div>
                <p className="text-[#aeb0b4] transition duration-150 ease-linear  mt-3 leading-8">
                  {item.disl}
                </p>
              </div>
              <hr className="my-4 border-[#424242]" />
              <div className="justify-center flex px-8 ">
                <Link className="text-white transition duration-150 ease-linear  items-center  py-3 transition-all ease-in-out px-8   flex a   w-fit ">
                  <FaArrowRightLong className="mr-3" /> Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products7;
