import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials5 = () => {
  const testimonials = [
    {
      name: "John Smith",
      text: "Best-Rate has completely transformed how I manage my finances. Their expert guidance and personalized service made all the difference.",
      role: "Business Owner",
    },
    {
      name: "Sarah Johnson",
      text: "I'm extremely satisfied with the professional and thorough service provided by Best-Rate. They helped me achieve my financial goals.",
      role: "Entrepreneur",
    },
    {
      name: "Michael Brown",
      text: "The team at Best-Rate goes above and beyond. Their knowledge and dedication to client success is unmatched in the industry.",
      role: "Real Estate Investor",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary px-6 py-2 text-white">
            Testimonials
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Read what our valued clients have to say about their experience
            working with us
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg bg-white p-8 text-center shadow-md">
                    <div>
                      <p className="mb-6 text-gray-800">{testimonial.text}</p>
                      <h4 className="mb-2 text-xl font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials5;
