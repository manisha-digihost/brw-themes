import React from "react";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

const Contact5 = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full mb-2 bg-primary-100 text-primary-600">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold mb-3">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help and would love to hear from
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="h-full bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="flex mb-6">
                <IoLocationSharp className="text-2xl mr-4 flex-shrink-0" />
                <div>
                  <h6 className="text-white font-semibold mb-1">
                    Our Location
                  </h6>
                  <p className="text-gray-300">
                    3481 Melrose Place, Beverly Hills
                  </p>
                </div>
              </div>

              <div className="flex mb-6">
                <IoMail className="text-2xl mr-4 flex-shrink-0" />
                <div>
                  <h6 className="text-white font-semibold mb-1">
                    Email Address
                  </h6>
                  <p className="text-gray-300">Info@example.com</p>
                </div>
              </div>

              <div className="flex mb-6">
                <IoCall className="text-2xl mr-4 flex-shrink-0" />
                <div>
                  <h6 className="text-white font-semibold mb-1">
                    Phone Number
                  </h6>
                  <p className="text-gray-300">(+1) 517 397 7100</p>
                </div>
              </div>

              <div className="flex">
                <LuClock4 className="text-2xl mr-4 flex-shrink-0" />
                <div>
                  <h6 className="text-white font-semibold mb-1">
                    Working Hours
                  </h6>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 4:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form name="contactForm" method="post" action="contact.php">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="relative col-span-full">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="relative col-span-full">
                    <textarea
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 h-40"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-primary-600 text-white rounded-full text-lg font-semibold transform transition hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact5;
