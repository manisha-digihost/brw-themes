import React from "react";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosPaperPlane } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
// import { IoMail } from "react-icons/io5";

const Contact8 = () => {
  return (
    <section id="contact" className="bg-black py-16">
      <div className="container-fluid mx-10 px-10 py-20 bg-[#0e110d] rounded-[12px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-8 bg-[#1f2022] py-16 px-10 rounded-[12px]">
            <h2 className="text-light text-[28px] font-bold uppercase mb-8 border-b border-b-[#ffffff34] pb-3">
              Contact Informatlon
            </h2>
            <div className="flex items-center space-x-4 bg-black p-5">
              <div className="text-3xl text-black py-4 px-3 bg-[#a6a182]">
                <IoLocationSharp />
              </div>
              <div>
                <h4 className="text-[22px] font-medium text-light">Address</h4>
                <p className="text-[15px] text-light">
                  3481 Melrose Place, Beverly Hills
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-black p-5">
              <div className="text-3xl text-black py-4 px-3 bg-[#a6a182]">
                <IoCall />
              </div>
              <div>
                <h4 className="text-[22px] font-medium text-light">
                  Contact Number
                </h4>
                <p className="text-[15px] text-light">(+1) 517 397 7100</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-black p-5">
              <div className="text-3xl text-black py-4 px-3 bg-[#a6a182]">
                <IoMail />
              </div>
              <div>
                <h4 className="text-[22px] font-medium text-light">Email Us</h4>
                <a href="#!" className="text-[15px] text-light">
                  example@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg shadow-md pe-0">
              <h2 className="text-light text-[35px] font-bold uppercase mb-8 border-b border-b-[#ffffff34] inline-block pb-3">
                Get A Quote
              </h2>
              <form
                className="space-y-4"
                name="enq"
                method="post"
                action="contact.php"
                onSubmit={() => validation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-6 py-4 rounded-[6px] focus:outline-none text-light bg-black"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-6 py-4 rounded-[6px] focus:outline-none text-light bg-black"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-6 py-4 rounded-[6px] focus:outline-none text-light bg-black"
                      placeholder="Mobile"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-6 py-4 rounded-[6px] focus:outline-none text-light bg-black"
                      placeholder="Company"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    rows="6"
                    name="message"
                    className="w-full px-6 py-4 rounded-[6px] focus:outline-none text-light bg-black"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    value="Send message"
                    name="submit"
                    id="submitButton"
                    className="bs7-button"
                    title="Submit Your Message!"
                  >
                    <span>
                      {" "}
                      Message
                      <span className="text-[18px] ms-1 inline-block">
                        <GoArrowUpRight />
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact8;
