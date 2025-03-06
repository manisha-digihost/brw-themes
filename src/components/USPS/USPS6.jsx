import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";

const USPS6 = () => {
  return (
    <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-0">
        {/* First Card */}
        <div className=" p-8   text-left hover:bg-blue-50 rounded-br-xl overflow-hidden">
          <div className="relative inline-block mb-8">
            <div className="relative z-10  bg-red-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg">
              <FaClock />
            </div>
            <div className="absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-red-300 rounded-full "></div>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-8">Modern design</h3>
          <p className="text-gray-500 mt-3 leading-8">
            Said be brought bel also fills kind face creepth gathired their sine good under is beast.
          </p>
        </div>

        {/* Second Card */}
        <div className="p-8  text-left hover:bg-blue-50 rounded-br-xl overflow-hidden">
          <div className="relative inline-block mb-8">
            <div className=" relative z-10 bg-green-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg">
              <FaAward />
            </div>
            <div className="absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-green-300 rounded-full  "></div>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-8">Expert Employee</h3>
          <p className="text-gray-500 mt-3 leading-8">
            Said be brought bel also fills kind face creepth gathired their sine good under is beast.
          </p>
        </div>

        {/* Third Card */}
        <div className="p-8   text-left hover:bg-blue-50 rounded-br-xl overflow-hidden">
          <div className="relative inline-block mb-8">
            <div className="relative z-10 bg-blue-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg">
              <FaHeadset />
            </div>
            <div className="absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-blue-300 rounded-full "></div>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-8">Support Center</h3>
          <p className="text-gray-500 mt-3 leading-8">
            Said be brought bel also fills kind face creepth gathired their sine good under is beast.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default USPS6;
