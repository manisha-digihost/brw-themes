import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer6 = () => {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
          
            <h3 className="mb-7 text-4xl font-semibold text-white">
            Have any project <br />
            on your mind?
            </h3>
            <div className="mb-5 flex items-center text-white">
              <IoMdMail className="mr-2" />
              <span>info@bestratewebsite.com</span>
            </div>
            <div className="mb-5 flex items-center text-white">
              <IoCall className="mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
        
            <div className="flex space-x-7">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaXTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-3 text-xl font-semibold text-white">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#!" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
          <h3 className="mt-7 mb-3 text-4xl font-semibold text-white">
            Best Rate <br /> Website
            </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consequatur.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-left">
          <p className="text-white">
            © {new Date().getFullYear()} Best Rate Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
