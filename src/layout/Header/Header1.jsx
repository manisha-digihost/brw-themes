import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 py-3 shadow-md z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="#home" className="text-2xl font-bold">
            <span className="text-primary-600">Best</span> Rate
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
            className={`lg:flex items-center ${isOpen ? "block" : "hidden"}`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-auto">
              <Link to="#home" className="px-3 py-2 hover:text-primary-600">
                Home
              </Link>
              <Link to="#about" className="px-3 py-2 hover:text-primary-600">
                About
              </Link>

              <div className="relative group">
                <button className="px-3 py-2 hover:text-primary-600 flex items-center">
                  Services
                  <svg
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
                  </svg>
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

              <Link to="#contact" className="px-3 py-2 hover:text-primary-600">
                Contact
              </Link>
              <Link to="/" className="px-3 py-2 hover:text-primary-600">
                Template1
              </Link>
            </div>

            <button className="mt-4 lg:mt-0 px-6 py-2 bg-primary-600 text-white rounded-full transform transition hover:scale-105">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
