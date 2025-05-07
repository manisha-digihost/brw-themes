import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const About8 = () => {
  return (
    <section className="py-16 bg-[#1f2022]">
      <div className=" mx-auto ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12">
            <div className="pr-0 lg:pr-10 mb-8 lg:mb-0">
              <div className="relative mr-[-350px]">
                <ul className="flex items-center gap-[30px] wrap relative">
                  <li>
                    <div className="rounded-[12px] overflow-hidden">
                      <img
                        className="rounded"
                        src="https://tecture-ten.vercel.app/assets/images/resources/about-one-1-1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <div className="rounded-[12px] overflow-hidden">
                      <img
                        className="rounded"
                        src="https://tecture-ten.vercel.app/assets/images/resources/about-one-1-2.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="relative mt-12 bg-[#1f2022] p-[70px] rounded-t-[60px] h-full">
              <div className="">
                <div className="mt-2">
                  <h2 className="text-[48px] text-white uppercase font-bold mb-2">
                    Where Inovation Meet <br />
                    Interior Design
                  </h2>
                  <p className="text-white mt-5 text-[15px]">
                    Form light bring of lights lights domin bion all beast hath
                    biside bielding greater saying dry after very upon beginning
                    he creed created meat stars does that good had moving seas
                    doners over lights form light green gathering one.
                  </p>
                  <p className="text-white mt-3 text-[15px]">
                    Ample order up in of in ready. Timed blind had now those
                    ought set often which. Or snug dull he show more true wish.
                    No at many deny away miss evil. On in so indeed spirit an
                    mother. Amounted old strictly but marianne admitted. People
                    former is remove remain we praise
                  </p>
                  <a href="#!" class="bs7-button w-fit mt-10">
                    <span className="flex items-center justify-center">
                      Read More
                      <span className="text-[18px] ms-1 inline-block">
                        <GoArrowUpRight />
                      </span>
                    </span>
                  </a>
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
