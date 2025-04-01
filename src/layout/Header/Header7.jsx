import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/theme6logo.png";
import { FaPlus } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

const Header7 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white absolute top-0 left-0 right-0 py-3 z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="#home" className="text-2xl font-bold">
            <img src={logo} alt="Logo" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div
            className={`lg:flex items-center justify-between w-full ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-auto gap-10">
              <Link
                to="#home"
                className="px-3 py-2 text-black font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
              >
                Home
              </Link>
              <Link
                to="#about"
                className="px-3 py-2 text-black font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
              >
                About
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-black font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in">
                  Services
                  {/* <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg> */}
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
                className="px-3 py-2 text-black font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
              >
                Contact
              </Link>
              <Link
                to="#contact"
                className="px-3 py-2 text-black font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
              >
                Gallery
              </Link>
              <Link
                to="/"
                className="px-3 py-2 text-black font-semibold hover:text-[#07d9d6]  text-[15px] transition-all duration-300 ease-in"
              >
                Template1
              </Link>
            </div>

            <div className="end-links">
              <div className="flex gap-8 items-center">
                <Link to="#" className="text-2xl">
                  <GoSearch />
                </Link>
                <Link to="#" className="flex flex-col gap-[6px] text-2xl">
                  <span className="w-[2rem] block h-[3px] bg-black"></span>
                  <span className="w-[1.2rem] block h-[2px] bg-black"></span>
                  <span className="w-[1.7rem] block h-[3px] bg-black"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header7;
