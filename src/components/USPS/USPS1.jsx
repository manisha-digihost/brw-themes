import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";

const USPS1 = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-6 text-primary">
              <FaAward className="mx-auto" size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Service</h3>
            <p className="text-gray-700">
              We pride ourselves on delivering exceptional quality in everything
              we do.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-6 text-primary">
              <FaClock className="mx-auto" size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p className="text-gray-700">
              Quick turnaround times without compromising on quality.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="mb-6 text-primary">
              <FaHeadset className="mx-auto" size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-700">
              Our dedicated team is always here to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPS1;
