import React from "react";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosPaperPlane } from "react-icons/io";

const Contact7 = () => {
  return (
    <section className="py-16 bg-[#14457b]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 md:flex md:flex-row">
          <div className="w-[80%] mx-auto">
            <div className="text-center mb-10 w-[80%] mx-auto md:w-[100%]">
              <h3 className="text-[50px] font-semibold mb-6 text-light text-center">
                Get in touch{" "}
              </h3>
              <p className="text-light">
                Our next drew much you with rank. Tore many held age hold rose
                than our. She literature sentiments any contrasted. Set aware
                joy sense young now tears china shy.
              </p>
            </div>
            <form action="" className="">
              <div className="col-span-full">
                <div className="mb-4">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-[4px] bg-transparent px-5 py-4 text-base border border-[#e9edf273]  outline-0 text-light placeholder:text-gray-400  sm:text-sm/6"
                    placeholder="Name"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="sm:col-span-3 w-full lg:w-1/2">
                  <div className="mb-4">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-[4px] bg-transparent px-5 py-4 text-base border border-[#e9edf273] outline-0 text-light placeholder:text-gray-400  sm:text-sm/6"
                      placeholder="Your Name"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-4 w-full lg:w-1/2">
                  <div className="mb-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-[4px] bg-transparent px-5 py-4 text-base border border-[#e9edf273] outline-0 text-light placeholder:text-gray-400  sm:text-sm/6"
                      placeholder="Your Email"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <div className="mb-4">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="h-[200px] block w-full rounded-[4px] bg-transparent px-5 py-4 text-base  border border-[#e9edf273] outline-0 text-light  sm:text-sm/6"
                    placeholder="Write your message here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </form>
            {/* <a
              href="#!"
              className="inline-block mt-5 px-10 py-5 text-white font-bold transition duration-300 hover:bg-green-600 bg-red-600"
            >
              Send Message
            </a> */}
            <div className="flex items-center justify-center mx-auto">
              <button
                type="submit"
                className="text-white py-4 transition-all ease-in-out px-8 bg-[#0cb8b6] hover:bg-black hover:text-white w-fit rounded-full mt-6 flex justify-center items-center gap-2"
              >
                Send Message <IoIosPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact7;
