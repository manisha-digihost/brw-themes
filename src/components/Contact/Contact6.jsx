import React from "react";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact6 = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 md:flex md:flex-row">
          <div className="w-full">
            {/* <h1 className="text-6xl font-black uppercase pb-[50px]">
              Let’s connect support team
            </h1>
            <span className="text-red-500 border-b-4 border-red-500 text-2xl font-semibold">
              Contact with us
            </span> */}
            <div className="w-[65%] mx-auto">
              <div className="text-center bs5-heading-sec">
                <h2 className="bs5-heading">
                  Our <span>Gallery</span>
                </h2>
                {/* <p>
              While mirth large of on front. Ye he greater related adapted
              proceed entered an. Through it examine express promise no. Past
              add size game cold girl off how old
            </p> */}
              </div>
            </div>
            <div className="pt-[50px] flex flex-wrap gap-5 items-center">
              <span className="text-xl font-semibold">
                <FaLocationDot />
              </span>
              <a href="#!" className="text-xl font-semibold">
                {" "}
                1 800 222 4357
              </a>
            </div>
            <div className="flex flex-wrap gap-5 items-center mt-5">
              <span className="text-xl font-semibold">
                <FaPhone />
              </span>
              <p className="text-xl font-semibold">
                {" "}
                25 Palmal Stree, London, England
              </p>
            </div>

            <div className="flex flex-wrap gap-5 items-center mt-5">
              <span className="text-xl font-semibold">
                <IoMdMail />
              </span>
              <a href="#!" className="text-xl font-semibold">
                {" "}
                webtend24@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-6">Get in touch </h3>

            <form action="">
              <div className="col-span-full">
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="h-[200px] block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6"
                    placeholder="Write your message here..."
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="flex gap-8 mt-5">
                <div className="sm:col-span-3 w-full lg:w-1/2">
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-5 text-base border border-gray-300 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6"
                      placeholder="Your Name"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4 w-full lg:w-1/2">
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-5 text-base border border-gray-300  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6"
                      placeholder="Your Email"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </form>

            <a
              href="#!"
              className="inline-block mt-5 px-10 py-5 text-white font-bold transition duration-300 hover:bg-green-600 bg-red-600"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact6;
