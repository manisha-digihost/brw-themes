import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

const Contact = () => {
  return (
    <div id="contact" className="bg-lightAlt py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form
                className="space-y-4"
                name="enq"
                method="post"
                action="contact.php"
                onSubmit={() => validation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows="6"
                    name="message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    value="Send message"
                    name="submit"
                    id="submitButton"
                    className="btn-primary w-full"
                    title="Submit Your Message!"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-primary">
                <IoLocationSharp />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Our Address</h4>
                <p className="text-gray-600">
                  3481 Melrose Place, Beverly Hills
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-primary">
                <IoMail />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Send your message</h4>
                <p className="text-gray-600">Info@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-primary">
                <IoCall />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Call us on</h4>
                <p className="text-gray-600">(+1) 517 397 7100</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-primary">
                <LuClock4 />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Work Time</h4>
                <p className="text-gray-600">
                  Mon - Fri: 08.00 - 16.00. <br />
                  Sat: 10.00 - 14.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
