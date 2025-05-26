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

const Contact9 = () => {
  return (
 <section id="contact" className="bg-[#fdf7ee] py-12 sm:py-16 lg:py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* Contact Info */}
      <div className="lg:col-span-5 space-y-8 bg-[#fdf7ee] py-10 sm:py-12 px-6 sm:px-10 rounded-[12px] border border-[#e0d7cd]">
        <h2 className="text-[#1f2022] text-2xl sm:text-3xl font-bold uppercase mb-6 border-b border-[#1f202234] pb-3">
          Contact Information
        </h2>

        <div className="flex items-start space-x-4 bg-white p-4 sm:p-5 shadow-sm rounded-md">
          <div className="text-2xl sm:text-3xl text-white p-3 bg-[#FE704B] rounded-md">
            <IoLocationSharp />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-medium text-[#1f2022]">Address</h4>
            <p className="text-sm sm:text-base text-[#1f2022]">
              3481 Melrose Place, Beverly Hills
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 bg-white p-4 sm:p-5 shadow-sm rounded-md">
          <div className="text-2xl sm:text-3xl text-white p-3 bg-[#FE704B] rounded-md">
            <IoCall />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-medium text-[#1f2022]">Contact Number</h4>
            <p className="text-sm sm:text-base text-[#1f2022]">(+1) 517 397 7100</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 bg-white p-4 sm:p-5 shadow-sm rounded-md">
          <div className="text-2xl sm:text-3xl text-white p-3 bg-[#FE704B] rounded-md">
            <IoMail />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-medium text-[#1f2022]">Email Us</h4>
            <a href="mailto:example@gmail.com" className="text-sm sm:text-base text-[#1f2022]">
              example@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 rounded-lg shadow-md bg-[#fdf7ee] border border-[#e0d7cd]">
          <h2 className="text-[#1f2022] text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 border-b border-b-[#1f202234] inline-block pb-3">
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
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#1f2022] bg-white border border-[#ddd]"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#1f2022] bg-white border border-[#ddd]"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="mobile"
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#1f2022] bg-white border border-[#ddd]"
                placeholder="Mobile"
                required
              />
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#1f2022] bg-white border border-[#ddd]"
                placeholder="Company"
                required
              />
            </div>

            <textarea
              rows="6"
              name="message"
              className="w-full px-4 py-3 rounded-md focus:outline-none text-[#1f2022] bg-white border border-[#ddd]"
              placeholder="Message"
              required
            ></textarea>

            <button
              type="submit"
              className="inline-block w-full sm:w-auto px-6 py-3 bg-[#FE704B] text-white rounded-md font-semibold text-[1rem] hover:bg-[#1f2022] hover:text-[#FFF3EF] transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default Contact9;
