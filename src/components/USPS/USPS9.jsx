import React from "react";
import { FaAmbulance } from "react-icons/fa";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { PiDeskFill } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";

const USPS9 = () => {
  return (
    <section className="bg-[#fff] px-4 md:px-[10rem]">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-0">
          {/* First Card */}
          <div className=" p-8 group flex items-center gap-5  text-left rounded-br-xl overflow-hidden">
            <span className="text-4xl group-hover:bg-[#FE704B] transition-all rounded group-hover:text-white p-3 border border-1 border-[#FE704B] text-[#FE704B] border-dotted">
              <MdOutlineEngineering />
            </span>
            <span className="text-[18px] font-medium text-dark uppercase">
              360 Panorama & 3D
            </span>   
          </div>

          {/* Second Card */}
          <div className="p-8 group text-2xl flex items-center gap-5 text-left  rounded-br-xl overflow-hidden">
            <span className="text-4xl group-hover:bg-[#FE704B] transition-all rounded group-hover:text-white p-3 border border-1 border-[#FE704B] text-[#FE704B] border-dotted">
              <PiDeskFill />
            </span>
            <span className="text-[18px] font-medium text-dark uppercase ">
              Crafted Furniture 
            </span>
          </div>

          {/* Third Card */}
          <div className="p-8 group text-2xl  flex items-center gap-5 text-left rounded-br-xl overflow-hidden">
            <span className="text-4xl group-hover:bg-[#FE704B] transition-all rounded group-hover:text-white p-3 border border-1 border-[#FE704B] text-[#FE704B] border-dotted">
              <MdOutlineSecurity />
            </span>
            <span className="text-[18px] font-medium text-dark uppercase ">
              Young, Enthusiastic 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPS9;
