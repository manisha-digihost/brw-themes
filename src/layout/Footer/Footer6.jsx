import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";

const Footer6 = () => {
  return (
    <footer className="">
      <div className="container mx-auto">
        <div className="grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1  pb-[20px]">
          <div className="sec1 p-5">
            <h2 className="relative pb-3 font-medium text-black text-2xl before:content-[''] before:absolute before:left-[33px] before:bottom-0 before:h-[2px] before:w-[5px] before:bg-[#07d9d6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-[30px] after:bg-[#07d9d6]">About</h2>
            <p className="mt-5">Excellence decisively nay man yet impression for contrasted remarkably. There spoke.</p>
            <div className="box border border-[#07d9d6] w-fit p-3 mt-5 rounded">
              <h2 className="flex items-center gap-2 text-2xl text-center text-[#07d9d6]"><MdAddIcCall />+123 456 7890</h2>
            </div>
          </div>
          <div className="sec2  p-5">
            <h2 className="relative pb-3 font-medium text-black text-2xl before:content-[''] before:absolute before:left-[33px] before:bottom-0 before:h-[2px] before:w-[5px] before:bg-[#07d9d6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-[30px] after:bg-[#07d9d6]">Usefull Link</h2>
            <ul className="flex flex-col gap-5 mt-5">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Services </a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec2  p-5">
          <h2 className="relative font-medium pb-3  text-black text-2xl before:content-[''] before:absolute before:left-[33px] before:bottom-0 before:h-[2px] before:w-[5px] before:bg-[#07d9d6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-[30px] after:bg-[#07d9d6]">Opening Hours</h2>
          <ul className="flex flex-col gap-5 mt-5">
            <li className="flex justify-between"><p>Mon - Tues :</p><p><strong>6.00 am - 10.00 pm</strong></p></li>
            <li className="flex justify-between"><p>Wednes - Thurs :</p><p ><strong>8.00 am - 6.00 pm</strong></p></li>
            <li className="flex justify-between"><p>Sun :</p><p className="text-[#07d9d6]"><strong>close</strong></p></li>
          </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer6;
