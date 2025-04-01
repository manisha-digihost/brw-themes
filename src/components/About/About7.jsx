import React from "react";
import banner3 from "../../assets/images/about6.jpg";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const About7 = () => {
  return (
    <section className="py-16 ">
      <div className=" mx-auto ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12">
            <div className="pr-0 lg:pr-10 mb-8 lg:mb-0">
              <div className="relative flex md:justify-end sm:justify-center">
                <div className="overflow-hidden lg:ml-8 px-6 lg:w-[70%] w-100 shadow-[0_0_12px_1px_#00000017]   ">
                  <img
                    src={banner3}
                    className=" object-cover relative z-10"
                    alt="Hero"
                  />
                </div>
                <div
                  className={`absolute translate-y-20 translate-x-16 top-7 bottom-0 p-5 opacity-30 flex items-end w-60 justify-center text-center align-center -left-4   border-white-100  `}
                >
                  <img
                    src="https://validthemes.net/site-template/medihub/assets/img/bg-dotted.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="relative mt-12 lg:pr-20 md:pr-0 md:px-6 md:mt-5 px-10 pr-0">
              <div className="">
                <div className="mt-2">
                  <h3 className="text-4xl">Diagnosing and treating cance</h3>
                  <p className="text-gray-500 mt-5 leading-8">
                    Form light bring of lights lights domin bion all beast hath
                    biside bielding greater saying dry after very upon beginning
                    he creed created meat stars does that good had moving seas
                    doners over lights form light green gathering one.
                  </p>
                  <p className="text-gray-500 mt-5 leading-8">
                    Ample order up in of in ready. Timed blind had now those
                    ought set often which. Or snug dull he show more true wish.
                    No at many deny away miss evil. On in so indeed spirit an
                    mother. Amounted old strictly but marianne admitted. People
                    former is remove remain we praise
                  </p>
                  <ul className="mt-6">
                    <li className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-[#0cb8b6]" />
                      Biomarker Testing
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-[#0cb8b6]" />
                      Immunotherapy to Treat Cancer
                    </li>
                  </ul>
                  <Link className="text-white py-3 transition-all ease-in-out px-8 bg-[#0cb8b6] block hover:bg-black hover:text-white w-fit rounded-3xl mt-6">
                    Read More
                  </Link>
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
