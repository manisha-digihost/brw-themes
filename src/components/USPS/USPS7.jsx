import React from "react";
import { FaAmbulance } from "react-icons/fa";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { PiDeskFill } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";

const USPS7 = () => {
  return (
    <section className=" bg-[#1f2022] mb-6">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-0">
          {/* First Card */}
          <div className=" p-8 group flex items-center gap-5  text-left rounded-br-xl overflow-hidden">
            <span className="text-4xl group-hover:bg-[#a6a182] transition-all rounded group-hover:text-white p-3 border border-1 border-[#a6a182] text-[#a6a182] border-dotted">
              <MdOutlineEngineering />
            </span>
            <span className="text-[18px] font-medium text-white uppercase ">
              360 Panorama & 3D Virtual Reality Experience
            </span>
          </div>

          {/* Second Card */}
          <div className="p-8 group text-2xl flex items-center gap-5 text-left  rounded-br-xl overflow-hidden">
            <span className="text-4xl group-hover:bg-[#a6a182] transition-all rounded group-hover:text-white p-3 border border-1 border-[#a6a182] text-[#a6a182] border-dotted">
              <PiDeskFill />
            </span>
            <span className="text-[18px] font-medium text-white uppercase ">
              Crafted Furniture and Sustainable Material
            </span>
          </div>

          {/* Third Card */}
          <div className="p-8 group text-2xl  flex items-center gap-5 text-left rounded-br-xl overflow-hidden">
            <span className="text-4xl group-hover:bg-[#a6a182] transition-all rounded group-hover:text-white p-3 border border-1 border-[#a6a182] text-[#a6a182] border-dotted">
              <MdOutlineSecurity />
            </span>
            <span className="text-[18px] font-medium text-white uppercase ">
              Young, Enthusiastic and Innovative Architects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPS7;
