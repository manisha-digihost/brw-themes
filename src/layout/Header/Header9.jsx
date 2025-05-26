import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header9 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFF3EF]">
      <div className="px-4 md:px-[10rem] py-7">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <h2 className="text-[#1f2022] font-semibold text-[2rem]">Haldaa</h2>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1.5"
          >
            <span className={`block w-6 h-0.5 bg-[#1f2022] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#1f2022] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#1f2022] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-[#1f2022] font-semibold text-[1rem]">
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Home</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">About</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Services</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Gallery</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Contact</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out">
              <a href="#!" className="btn px-8 py-3 bg-[#FE704B] text-white rounded-md font-semibold text-[1rem] hover:bg-[#1f2022] hover:text-[#FFF3EF] transition duration-300 ease-in-out">
                Register Now
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4 mt-4 text-[#1f2022] font-semibold text-[1rem]">
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Home</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">About</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Services</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Gallery</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out"><a href="#!">Contact</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out">
              <a href="#!" className="inline-block px-8 py-3 bg-[#FE704B] text-white rounded-md font-semibold text-[1rem] hover:bg-[#1f2022] hover:text-[#FFF3EF] transition duration-300 ease-in-out">
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header9;
