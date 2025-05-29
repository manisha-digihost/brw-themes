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
 <section id="contact" className="bg-[#fff] px-4 md:px-[2rem] py-7">
  <div className="container mx-auto ">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* Contact Info */}
      <div className="lg:col-span-5 space-y-8 bg-[#fdf7ee]  rounded-[12px] ">
        <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-1.jpg?v=1721030981" alt="" />
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 ">
         <h2 className="text-[30px] leading-[35px] font-bold mb-5 text-black">Contact Us</h2>

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
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#000] placeholder:text-black bg-white border border-[#000]"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#000] placeholder:text-black bg-white border border-[#000]"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="mobile"
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#000] placeholder:text-black bg-white border border-[#000]"
                placeholder="Mobile"
                required
              />
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 rounded-md focus:outline-none text-[#000] placeholder:text-black bg-white border border-[#000]"
                placeholder="Company"
                required
              />
            </div>

            <textarea
              rows="6"
              name="message"
              className="w-full px-4 py-3 rounded-md focus:outline-none text-[#000] placeholder:text-black bg-white border border-[#000]"
              placeholder="Message"
              required
            ></textarea>

           <a href="#!" class="btn px-5 mt-3 block w-fit py-2 border bg-dark hover:text-dark border-dark hover:bg-[#fff] font-normal text-white rounded-[20px] f text-[1rem]  transition duration-300 ease-in-out">Submit</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default Contact9;
