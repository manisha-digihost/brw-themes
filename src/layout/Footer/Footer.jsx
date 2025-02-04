import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <section className="p-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex space-x-4">
            <a href="" className="hover:text-gray-800">
              <FaFacebookF />
            </a>
            <a href="" className="hover:text-gray-800">
              <FaXTwitter />
            </a>
            <a href="" className="hover:text-gray-800">
              <FaInstagram />
            </a>
            <a href="" className="hover:text-gray-800">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>

      {/* Section: Links  */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h6 className="uppercase font-bold mb-4">Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            {/* Products */}
            <div>
              <h6 className="uppercase font-bold mb-4">Products</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Angular
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    React
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Vue
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Laravel
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h6 className="uppercase font-bold mb-4">Useful links</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h6 className="uppercase font-bold mb-4">Contact</h6>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <FaHome /> New York, NY 10012, US
                </p>
                <p className="flex items-center gap-2">
                  <IoMdMail /> info@example.com
                </p>
                <p className="flex items-center gap-2">
                  <IoCall />+ 01 234 567 88
                </p>
                <p className="flex items-center gap-2">
                  <IoCall />+ 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 bg-gray-50">
        © 2025 Copyright:{" "}
        <a
          className="font-bold hover:text-gray-800"
          href="https://www.digihost.in/"
        >
          Best Rate Website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
