import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import serv1 from "./../../assets/images/product/services-1-1.jpg";
import serv2 from "./../../assets/images/product/services-1-2.jpg";
import serv3 from "./../../assets/images/product/services-1-3.jpg";
import { IoMdStar } from "react-icons/io";

const Products9 = () => {
  const productlist = [
    {
      title: "Training And Socialization",
      // disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-1_360x.jpg?v=1721792499",
    },
    {
      title: "Grooming Program",
      // disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-1_360x.jpg?v=1721792499",
    },
    {
      title: "Pet Nutrition",
      // disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-1_360x.jpg?v=1721792499",
    },
    {
      title: "LabraDog Helpline",
      // disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://wpbingo-darion.myshopify.com/cdn/shop/files/instagram-1_360x.jpg?v=1721792499",
    },
  ];

  return (
    <section className="py-20 px-2 bg-[#ebebe9]">
      <div className="mx-auto px-6">
        <div className="mb-10 flex justify-between items-center">
          <div className="mb-9 mt-7">
            <h2 className="text-4xl text-[#0B2239] font-600 mb-2 font-semibold">
              Bestseller
            </h2>
            <p className="text-[#555555]">
              Experience the best products at our store!
            </p>
          </div>
          <div>
            <a
              href="#!"
              className="btn px-5 py-2 border hover:text-light border-dark hover:bg-dark font-normal text-dark rounded-[20px] text-[1rem] transition duration-300 ease-in-out"
            >
              View All
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* First Card */}
          {productlist.map((item, index) => (
            <div className="">
              <div className="p-9 shadow-sm shadow-500/50 rounded-[15px] group gap-5 text-left rounded-br-xl overflow-hidden mb-8 bg-light">
                <figure className="">
                  <img
                    className="transition-transform duration-500"
                    src={item.url}
                    alt=""
                  />
                </figure>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="text-[#b8b8b8]">
                    <IoMdStar />
                  </div>
                  <div className="text-[#b8b8b8]">
                    <IoMdStar />
                  </div>
                  <div className="text-[#b8b8b8]">
                    <IoMdStar />
                  </div>
                  <div className="text-[#b8b8b8]">
                    <IoMdStar />
                  </div>
                  <div className="text-[#b8b8b8]">
                    <IoMdStar />
                  </div>
                </div>
                <h4 className="text-[#555555] text-[16px] leading-7 font-sm">
                  {item.title}
                </h4>
                <h5 className="flex items-center justify-center font-semibold">
                  75 <MdCurrencyRupee className="font-semibold" />
                </h5>
                {/* <p className="text-[#555555] text-[16px] leading-7 font-sm">
                  {item.disl}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products9;
