import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header9 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ffffff]">
      <div className="px-4 md:px-[2rem] py-7">
        <div className="flex items-center flex-wrap">
         

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
          <ul className="hidden md:flex flex-1 gap-10 text-[#1f2022] font-semibold text-[1rem] ">
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out font-normal"><a href="#!">Home</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out font-normal"><a href="#!">About</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out font-normal"><a href="#!">Services</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out font-normal"><a href="#!">Gallery</a></li>
            <li className="hover:text-[#FE704B] transition duration-300 ease-in-out font-normal"><a href="#!">Contact</a></li>
           
          </ul>
           <div className="logo">
            <Link to="/">
              <h2 className="text-[#1f2022] font-normal text-[2rem]">DARION</h2>
            </Link>
          </div>
          <div className="flex-1 text-end">
            <a href="#!" className="btn px-5 py-2 border border-dark hover:bg-[#fff] font-normal text-black rounded-[20px] f text-[1rem]  transition duration-300 ease-in-out">
                Register Now
              </a>
          </div>
          
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
            <a href="#!" className="btn px-5 py-2 border border-dark hover:bg-[#fff] font-normal text-black rounded-[20px] f text-[1rem]  transition duration-300 ease-in-out">
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
