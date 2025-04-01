import React from "react";
import { FaAmbulance } from "react-icons/fa";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";

const USPS7 = () => {
  return (
    <section className=" bg-white mb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-0">
          {/* First Card */}
          <div className=" p-8 text-2xl flex items-center gap-5  text-left hover:bg-blue-50 hover:text-[#07d9d6]  rounded-br-xl overflow-hidden">
            <FaAmbulance /> Emergency Case
          </div>

          {/* Second Card */}
          <div className="p-8 text-2xl flex items-center gap-5 text-[#07d9d6]  text-left bg-blue-50 rounded-br-xl overflow-hidden">
            <FaClock /> Opening Hours
          </div>

          {/* Third Card */}
          <div className="p-8 text-2xl  flex items-center gap-5 hover:text-[#07d9d6] text-left hover:bg-blue-50 rounded-br-xl overflow-hidden">
            <FaLungs /> Cancer Care
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPS7;
