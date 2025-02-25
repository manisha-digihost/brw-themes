import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import videobanner from "./../../assets/images/video-bg.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Testimonials5 = () => {
  const testimonials = [
    {
      text: "She were green under to multiply over teen stars seen livine second and whose blessed begining give from evening the saying light darkness give saying. about in sea given fly third abundantly must forgivide",
      name: "Daniel Richard",
      role: "CEO, Apple",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      text: "She were green under to multiply over teen stars seen livine second and whose blessed begining give from evening the saying light darkness give saying. about in sea given fly third abundantly must forgivide",
      name: "Daniel Richard",
      role: "CEO, Apple",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, suscipit. Laboriosam distinctio sunt ipsa? Rem perferendis assumenda laborum recusandae.",
      name: "Emma Johnson",
      role: "CTO, Microsoft",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      text: "Exercitationem atque accusantium repellendus alias laudantium nisi architecto obcaecati tempora quibusdam in cumque iste dolore, optio beatae.",
      name: "James Brown",
      role: "Lead Designer, Google",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-100">
            <div className="mb-9">
              <h2 className="text-5xl uppercase font-bold mb-2">Happy Client Says About our company</h2>
              <span className="text-sm text-red-600 underline ">Some Standard Serivices</span>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper mb-8"
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile: 1 slide
                    768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet: 2 slides
                    1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop: 3 slides
                  }}
                >
                  {
                    testimonials.map((item1) => (
                      <SwiperSlide>
                        <img className="rounded-full" src={item1.image} />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  spaceBetween={10}
                  navigation={false}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {
                    testimonials.map((item) => (
                      <SwiperSlide>
                        <div className="">
                          <p className="mb-6">
                            {item.text}
                          </p>
                          <div className="">
                            <h5 className="text-lg font-bold">{item.name}</h5>
                            <span className="text-sm">{item.role}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
          </div>
          <div className="">
            <figure>
              <img className="rounded-tl-[23vw]" src={videobanner} alt="" />
            </figure>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Testimonials5;
