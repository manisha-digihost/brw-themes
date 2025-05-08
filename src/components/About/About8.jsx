import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const About8 = () => {
  return (
    <section className="py-20 px-16 bg-[#fdf7ee]">
      <div className=" mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12">
            <div className="pr-0 lg:pr-10 mb-8 lg:mb-0 w-100" >
              <div className="relative w-100 ">
                  <figure className="w-100">
                    <img className="w-100" src="	https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/about/02.png" alt="" />
                  </figure>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="mb-9 mt-7">
              <span className="text-lg text-[#FE704B] ">About Haldaa</span>
              <h2 className="text-4xl text-[#0B2239] font-600 mb-2">We Love <strong>to Take Care</strong> of Your Pets</h2>
            </div>
            <div className="mb-6">
              <p className="text-[#555555] mb-4 text-[16px] font-400">
              We are proud to offer top range of comprehensive employment services such asser payroll and benefits administration, management, and assistance with global business range employment employer.
              </p>
              <p className="text-[#555555] mb-4 text-[16px] font-400">Through our cognition-based coaching and consulting racapproach we creative facilitate your business growth from small to midsize from meid size to global business or from crisis to success.</p>
            </div>
                <div className="grid md:grid-cols-2 gap-0">
                   
            
                      {/* Second Card */}
                      <div className="p-3 group inline-flex items-center gap-5 text-left rounded-br-xl overflow-hidden">
                          <div className="group-hover:bg-[#] transition-all p-1  shadow-lg shadow-500/50 rounded-[10px]">
                            <figure className=" h-[60px] w-[60px]" >

                                <img  className="transition-transform duration-500 group-hover:[transform:rotateY(360deg)]" src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/about/icon/01.png" alt="" />
                            </figure>
                          
                          </div>
                        <div>
                          <h4 className="text-[#0B2239] font-bold mb-2 text-[18px]">14+ Years Experience</h4>
                          <p className="text-[#555555] text-[15px] font-sm">Strategy experience and an lytical expertise.</p>
                        </div>
                      </div>
            
                      {/* Third Card */}
                      <div className="p-3 group inline-flex items-center gap-5 text-left rounded-br-xl overflow-hidden">
                        <div className="transition-all p-1 shadow-lg shadow-500/50 rounded-[10px]">
                          <figure className="h-[60px] w-[60px]">
                            <img
                              src="https://demos.codexcoder.com/labartisan/html/haldaa-demo/haldaa/assets/images/about/icon/02.png"
                              alt=""
                              className="transition-transform duration-500 group-hover:[transform:rotateY(360deg)]"
                            />
                          </figure>
                        </div>
                        <div>
                          <h4 className="text-[#0B2239] font-bold mb-2 text-[18px]">Certified Groomer</h4>
                          <p className="text-[#555555] text-[15px] font-sm">
                            Strategy experience and analytical expertise.
                          </p>
                        </div>
                      </div>

                    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About8;
