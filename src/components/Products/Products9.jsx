import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import serv1 from "./../../assets/images/product/services-1-1.jpg";
import serv2 from "./../../assets/images/product/services-1-2.jpg";
import serv3 from "./../../assets/images/product/services-1-3.jpg";

const Products9 = () => {
  const productlist = [
    {
      title: "Training And Socialization",
      disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/service/icon/01.png",
    },
    {
      title: "Grooming Program",
      disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/service/icon/02.png",
    },
    {
      title: "Pet Nutrition",
      disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/service/icon/03.png",
    },
    {
      title: "LabraDog Helpline",
      disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/service/icon/04.png",
    },
    {
      title: "Pet Health",
      disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/service/icon/05.png",
    },
    {
      title: "Pet Breeds",
      disl: "Don’t get shirty with me owt to do with me arse down have it car boot happy days noflat the little rotter cheeky.!",
      url: "https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/service/icon/06.png",
    },
  ];

  return (
    <section className="py-20 px-16 bg-[#fffcf8]">
      <div className="mx-auto px-6">
        <div className="mb-9 max-w-4xl mx-auto text-center">
        <div className="mb-9 mt-7">
              <span className="text-lg text-[#FE704B] ">Our Haldaa Services</span>
              <h2 className="text-4xl text-[#0B2239] font-600 mb-2">We Are<strong> Best Team for Pet</strong> Care Services</h2>
              <p className="text-[#555555]">Conveniently customize proactive services leveraged without <br /> continualliery aggregate fricctionle ou wellies</p>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* First Card */}
          {productlist.map((item, index) => (
             <div className="p-9  shadow-lg shadow-500/50 rounded-[10px] group  gap-5 text-left rounded-br-xl overflow-hidden">
             <div className="mb-4 group-hover:bg-[#] transition-all p-1 w-fit shadow-lg shadow-[#fe704b24]/30 rounded-[10px]">
               <figure className=" h-[60px] w-[60px]" >

                   <img  className="transition-transform duration-500 group-hover:[transform:rotateY(360deg)]" src={item.url} alt="" />
               </figure>
             
             </div>
           <div>
             <h4 className="text-[#0B2239] font-[600] mb-2 text-[21px]">{item.title}</h4>
             <p className="text-[#555555] text-[16px] leading-7 font-sm">{item.disl}</p>
           </div>
         </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products9;
