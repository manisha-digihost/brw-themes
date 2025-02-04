import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Products1 = () => {
  const products = [
    {
      title: "Financial Planning",
      description:
        "Comprehensive financial planning tailored to your goals and future aspirations",
      icon: "💰",
    },
    {
      title: "Investment Strategy",
      description:
        "Expert investment advice and portfolio management to maximize your returns",
      icon: "📈",
    },
    {
      title: "Risk Management",
      description:
        "Protect your assets and minimize risks with our proven strategies",
      icon: "🛡️",
    },
  ];

  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary px-6 py-2 text-white">
            Our Services
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Solutions That Drive Success
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our range of financial services designed to help you
            achieve your goals and secure your future
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg"
            >
              <span className="mb-4 block text-4xl">{product.icon}</span>
              <h3 className="mb-3 text-xl font-semibold">{product.title}</h3>
              <p className="mb-6 text-gray-600">{product.description}</p>
              <a
                href="!#"
                className="flex items-center text-primary hover:underline"
              >
                Learn More <FaArrowRight className="ml-2" />
              </a>
              <div
                className="absolute -bottom-[75px] -right-[75px] h-[150px] w-[150px] rotate-45 opacity-10"
                style={{
                  background:
                    "linear-gradient(45deg, #f3f4f6 25%, transparent 25%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products1;
