import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold">
              Best Rate
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="#home"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link
                to="#home"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                About
              </Link>
              <Link
                to="#home"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Products
              </Link>
              <Link
                to="#home"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Testimonials
              </Link>
              <Link
                to="#home"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Gallery
              </Link>
              <Link
                to="#home"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Contact Us
              </Link>
              <Link
                to="base-template-1"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Template1
              </Link>
              <Link
                to="base-template-2"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Template2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
