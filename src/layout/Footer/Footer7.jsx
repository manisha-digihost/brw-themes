import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import logo from "../../assets/images/bs7-logo.png";

const Footer7 = () => {
  return (
    <footer className="bg-[#1f2022] py-6">
      <div className="container mx-auto">
        <div className="grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1  pb-[20px]">
          <div className="sec1 p-7">
            <img src={logo} alt="" />
            <p className="text-[#aeb0b4] mt-5">Eros vivamus platea nullam id consequat eu sociis lectus aliquam nibh auctor elitsed libero pharetra consequat and fad sociis conubia favorite to risus.</p>
          </div>
          <div className="sec2 p-5">
            <h2 className="relative pb-3 font-medium text-white text-2xl">
              Usefull Link
            </h2>
            <ul className="flex flex-col gap-5 mt-5">
              <li>
                <a className="text-[#aeb0b4]" href="#!">Home</a>
              </li>
              <li>
                <a className="text-[#aeb0b4]" href="#!">About Us</a>
              </li>
              <li>
                <a className="text-[#aeb0b4]" href="#!">Services </a>
              </li>
              <li>
                <a className="text-[#aeb0b4]" href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec2  p-5">
          <h2 className="relative pb-3 font-medium text-white text-2xl">
              Opening Hours
            </h2>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="flex justify-between text-[#aeb0b4]">
                <p>Mon - Tues :</p>
                <p>
                  <strong>6.00 am - 10.00 pm</strong>
                </p>
              </li>
              <li className="flex justify-between text-[#aeb0b4]">
                <p>Wednes - Thurs :</p>
                <p>
                  <strong>8.00 am - 6.00 pm</strong>
                </p>
              </li>
              <li className="flex justify-between text-[#aeb0b4]">
                <p>Sun :</p>
                <p className="text-[#a6a182]">
                  <strong>close</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;
