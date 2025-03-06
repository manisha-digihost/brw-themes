import React from "react";
import banner2 from "../../assets/images/banner52.webp";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const About6 = () => {
  return (
    <section className="py-0 ">
      <div className=" mx-auto ">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12">
            <div className="pr-0 lg:pr-10 mb-8 lg:mb-0">
             <div className="relative">
                  <div className="overflow-hidden shadow-[0_0_12px_1px_#00000017] rounded-tr-[60%] border-white  border-r-0 h-[50rem] shadow-[0 0 12px 1px #00000017] ">
                    <img
                      src={banner2}
                      className="w-full border h-full object-cover"
                      alt="Hero"
                    />
                  </div>
                  <div className={`absolute translate-y-6 -translate-x-1 top-7 p-5  flex items-center justify-center text-center align-center -right-0 z w-44 h-44 border-white-100 border-8 bg-green-600 rounded-full `}>
                    <h3 className="text-2xl text-white font-bold">2024 ACHIVED PRIZE</h3>
                  </div>
                </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="relative mt-2 pr-20">
              <div className="">
                <div className="mb-9">
                  <h2 className="text-6xl uppercase font-bold mb-2">Solving your complex <br /> problem needs</h2>
                  <span className="text-sm text-red-600 underline ">About our Agency</span>
                </div>
                <p className="text-gray-500 mt-3 leading-8">Form light bring of lights lights domin bion all beast hath biside bielding greater saying dry after very upon beginning he creed created meat stars does that good had moving seas doners over lights form light green gathering one.</p>

                <div className=" p-8 flex justify-center  gap-x-5  text-left  rounded-br-xl overflow-hidden">
                  <div className="relative inline-block h-fit  mb-5">
                    <div className={`relative z-10  bg-red-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg`}>
                      <FaClock />
                    </div>
                    <div className={`absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-red-300 rounded-full `}></div>
                  </div>
                  <div className="">
                    <h3 className="text-xl font-semibold mb-0">Evolution of idea</h3>
                    <p className="text-gray-500 mt-3 leading-8">
                    Open saw male may seas light replenish is third all fruit fowl over saw bearing unto beginning every moved.
                    </p>
                  </div>
                </div>
                <div className=" p-8 flex justify-center  gap-x-5  text-left  rounded-br-xl overflow-hidden">
                  <div className="relative inline-block h-fit  mb-5">
                    <div className={`relative z-10  bg-green-600 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg`}>
                     <FaAward />
                    </div>
                    <div className={`absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-green-300 rounded-full `}></div>
                  </div>
                  <div className="">
                    <h3 className="text-xl font-semibold mb-0">Successfull project</h3>
                    <p className="text-gray-500 mt-3 leading-8">
                    Cattle void lesser above abundantly and face there blessed give gathering about in sea given fly third abundantly forgivide
                    </p>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767.98px) {
          .experience-badge {
            position: relative;
            left: 10%;
            top: 80%;
            transform: translateY(-50%);
            height: 150px;
            width: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default About6;
