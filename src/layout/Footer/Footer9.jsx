import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import logo from "../../assets/images/bs7-logo.png";

const Footer9 = () => {
  return (
    <footer className="bg-[#fff] py-6">
      <div className="container mx-auto">
        <div className="grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1 pb-[20px]">
          <div className="sec3 p-5">
            <h2 className="relative pb-3 font-medium text-dark text-2xl">
              Subscribe Newsletter
            </h2>
            <p className="text-[#000] mt-3 mb-4">Get the latest updates and offers.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-lg text-[#000] focus:outline-none focus:ring-2 focus:ring-[#FE704B]"
              />
               <a href="#!" class="btn px-5 mt-3 block w-fit py-2 border bg-dark hover:text-dark border-dark hover:bg-[#fff] font-normal text-white rounded-[20px] f text-[1rem]  transition duration-300 ease-in-out">Submit</a>
            </form>
          </div>
          <div className="sec1 p-7">
            <h2 className="text-[#1f2022] font-normal text-[2rem]">DARION</h2>
            <p className="text-[#000] mt-5 text-[15px]">
              Eros vivamus platea nullam id consequat eu sociis lectus aliquam nibh
              auctor elitsed libero pharetra consequat and fad sociis conubia favorite to
              risus.
            </p>
          </div>

          <div className="sec2 p-5">
            <h2 className="relative pb-3 font-medium text-dark text-2xl">
              Usefull Link
            </h2>
            <ul className="flex flex-col gap-5 mt-5">
              <li><a className="text-[#000]" href="#!">Home</a></li>
              <li><a className="text-[#000]" href="#!">About Us</a></li>
              <li><a className="text-[#000]" href="#!">Services</a></li>
              <li><a className="text-[#000]" href="#!">Contact</a></li>
            </ul>
          </div>

          
        </div>

        <p className="text-[#000] text-center text-[0.9rem]">
          Copyright © 2025. all Right Reserved by DigiHost
        </p>
      </div>
    </footer>

  );
};

export default Footer9;
