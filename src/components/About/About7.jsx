import React from "react";
import banner3 from "../../assets/images/about6.jpg";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const About7 = () => {
  return (
    <section className="py-16 bg-[#1f2022]">
      <div className=" mx-auto ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12">
            <div className="pr-0 lg:pr-10 mb-8 lg:mb-0">
              <div className="relative mr-[-350px]">
                  <ul className="flex items-center gap-[30px] wrap relative">
                    <li>
                      <div className="rounded ">
                          <img className="rounded " src="https://tecture-ten.vercel.app/assets/images/resources/about-one-1-1.jpg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="">
                          <img className="rounded " src="https://tecture-ten.vercel.app/assets/images/resources/about-one-1-2.jpg" alt="" />
                      </div>
                    </li>
                  </ul>
               
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 ">
            <div className="relative mt-12 bg-[#1f2022] p-[70px] ">
              <div className="">
                <div className="mt-2">
                <h2 className="text-3xl text-white uppercase font-bold mb-2">
                  Where Inovation Meet <br />
                  Interior Design
                  
                  </h2>
                  <p className="text-white mt-5 text-[15px] ">
                    Form light bring of lights lights domin bion all beast hath
                    biside bielding greater saying dry after very upon beginning
                    he creed created meat stars does that good had moving seas
                    doners over lights form light green gathering one.
                  </p>
                  <p className="text-white mt-3 text-[15px] ">
                    Ample order up in of in ready. Timed blind had now those
                    ought set often which. Or snug dull he show more true wish.
                    No at many deny away miss evil. On in so indeed spirit an
                    mother. Amounted old strictly but marianne admitted. People
                    former is remove remain we praise
                  </p>
                  
          
                  <a href="#!" class="bs7-button w-fit mt-5">Read More<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none" class="svg2"><path d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z" fill="#fff"></path></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About7;
