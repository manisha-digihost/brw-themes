import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/bs7-logo.png";
import { FaPlus } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header7 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black absolute top-0 left-0 right-0 z-20 mx-10">
      <div className="container">
        <div className="flex justify-between items-center px-4 gap-0">
          <Link to="#home" className="text-2xl font-bold">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="flex flex-col">
            <div className="flex justify-between gap-3 py-3 px-4">
              <div className="flex gap-7">
                <Link to="#" className="text-white flex gap-2 items-center">
                  <FiPhoneCall className="text-[#a6a182]" /> +1 (550) 250 5260
                </Link>
                <Link to="#" className="text-white flex gap-2 items-center">
                  <FiMail className="text-[#a6a182]" /> info@tecture.com
                </Link>
              </div>
              <div className="flex items-center gap-9">
                <Link to="#" className="text-white flex gap-2 items-center">
                  <FiPhoneCall className="text-[#a6a182]" /> Mon - Fri: 09:00 -
                  05:00
                </Link>
                <div className="flex gap-2">
                  <Link
                    to="#!"
                    className="bg-[#363739] text-white rounded-full h-[40px] w-[40px] flex items-center justify-center"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="#!"
                    className="bg-[#363739] text-white rounded-full h-[40px] w-[40px] flex items-center justify-center"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to="#!"
                    className="bg-[#363739] text-white rounded-full h-[40px] w-[40px] flex items-center justify-center"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    to="#!"
                    className="bg-[#363739] text-white rounded-full h-[40px] w-[40px] flex items-center justify-center"
                  >
                    <FaPinterestP />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`lg:flex items-center justify-between w-full bg-white py-4 px-4 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:mx-auto gap-10">
                <Link
                  to="#home"
                  className="px-3 py-2 text-dark font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
                >
                  Home
                </Link>
                <Link
                  to="#about"
                  className="px-3 py-2 text-dark font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
                >
                  About
                </Link>

                <div className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 text-dark font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in">
                    Services
                    <FaPlus />
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-lg">
                    <Link
                      to="#products"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Products
                    </Link>
                    <Link
                      to="#testimonials"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Testimonials
                    </Link>
                    <Link
                      to="#gallery"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gallery
                    </Link>
                  </div>
                </div>

                <Link
                  to="#contact"
                  className="px-3 py-2 text-dark font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
                >
                  Contact
                </Link>
                <Link
                  to="#contact"
                  className="px-3 py-2 text-dark font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
                >
                  Gallery
                </Link>
                <Link
                  to="/"
                  className="px-3 py-2 text-dark font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
                >
                  Template1
                </Link>
              </div>
              <div className="end-links">
                <div className="flex gap-8 items-center">
                  <Link to="#" className="text-2xl">
                    <GoSearch />
                  </Link>
                  <a href="#" className="bs7-button">
                    Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header7;
