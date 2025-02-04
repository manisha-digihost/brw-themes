import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer1 = () => {
  return (
    <footer className="bg-dark py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <h5 className="mb-3 text-xl font-semibold text-white">
              Best Rate Website
            </h5>
            <p className="mb-4 text-white">
              Providing quality digital solutions and exceptional service to
              help your business grow online.
            </p>
            <div className="flex space-x-4">
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
            <h5 className="mb-3 text-xl font-semibold text-white">
              Contact Us
            </h5>
            <div className="mb-3 flex items-center text-white">
              <IoMdMail className="mr-2" />
              <span>info@bestratewebsite.com</span>
            </div>
            <div className="mb-3 flex items-center text-white">
              <IoCall className="mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <address className="text-white">
              123 Business Street
              <br />
              New York, NY 10001
              <br />
              United States
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-white">
            © {new Date().getFullYear()} Best Rate Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
