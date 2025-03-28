import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import videobanner from "./../../assets/images/video-bg.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Pagination } from "swiper/modules";
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Testimonials6 = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="lg:w-[65%] mx-auto">
          <div className="text-center bs5-heading-sec">
            <h2 className="bs5-heading">
              Patient <span>Testimonials</span>
            </h2>
            <p>
              While mirth large of on front. Ye he greater related adapted
              proceed entered an. Through it examine express promise no. Past
              add size game cold girl off how old
            </p>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper mt-16"
        >
          <SwiperSlide className="relative p-10">
            <div className="absolute top-[18px] left-[110px] text-5xl text-[#0cb8b6]">
              <FaQuoteLeft />
            </div>
            <div className="card lg:p-20 border rounded-3xl md:p-7 p-5">
              <p className="text-[#666666] text-[18px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off. Advantage
                dependent suspicion convinced provision him yet. Mr immediate
                remaining conveying allowance do or.
              </p>
              <hr className="my-10" />
              <div className="flex gap-5">
                <div className="rounded-full overflow-hidden w-[60px] h-[60px] ">
                  <img
                    src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                    alt="Person"
                  />
                </div>
                <div className="">
                  <h4 className="text-[#04000b] text-[22px] mb-1">
                    John Abraham
                  </h4>
                  <h5 className="text-[#666666] uppercase">
                    patient of <span className="text-[#0cb8b6]">surgery</span>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative p-10">
            <div className="absolute top-[18px] left-[110px] text-5xl text-[#0cb8b6]">
              <FaQuoteLeft />
            </div>
            <div className="card lg:p-20 border rounded-3xl md:p-7 p-5">
              <p className="text-[#666666] text-[18px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off. Advantage
                dependent suspicion convinced provision him yet. Mr immediate
                remaining conveying allowance do or.
              </p>
              <hr className="my-10" />
              <div className="flex gap-5">
                <div className="rounded-full overflow-hidden w-[60px] h-[60px] ">
                  <img
                    src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                    alt="Person"
                  />
                </div>
                <div className="">
                  <h4 className="text-[#04000b] text-[22px] mb-1">
                    John Abraham
                  </h4>
                  <h5 className="text-[#666666] uppercase">
                    patient of <span className="text-[#0cb8b6]">surgery</span>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative p-10">
            <div className="absolute top-[18px] left-[110px] text-5xl text-[#0cb8b6]">
              <FaQuoteLeft />
            </div>
            <div className="card lg:p-20 border rounded-3xl md:p-7 p-5">
              <p className="text-[#666666] text-[18px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off. Advantage
                dependent suspicion convinced provision him yet. Mr immediate
                remaining conveying allowance do or.
              </p>
              <hr className="my-10" />
              <div className="flex gap-5">
                <div className="rounded-full overflow-hidden w-[60px] h-[60px] ">
                  <img
                    src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                    alt="Person"
                  />
                </div>
                <div className="">
                  <h4 className="text-[#04000b] text-[22px] mb-1">
                    John Abraham
                  </h4>
                  <h5 className="text-[#666666] uppercase">
                    patient of <span className="text-[#0cb8b6]">surgery</span>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative p-10">
            <div className="absolute top-[18px] left-[110px] text-5xl text-[#0cb8b6]">
              <FaQuoteLeft />
            </div>
            <div className="card lg:p-20 border rounded-3xl md:p-7 p-5">
              <p className="text-[#666666] text-[18px]">
                Departure so attention pronounce satisfied daughters am. But shy
                tedious pressed studied opinion entered windows off. Advantage
                dependent suspicion convinced provision him yet. Mr immediate
                remaining conveying allowance do or.
              </p>
              <hr className="my-10" />
              <div className="flex gap-5">
                <div className="rounded-full overflow-hidden w-[60px] h-[60px] ">
                  <img
                    src="https://validthemes.net/site-template/medihub/assets/img/team/7.jpg"
                    alt="Person"
                  />
                </div>
                <div className="">
                  <h4 className="text-[#04000b] text-[22px] mb-1">
                    John Abraham
                  </h4>
                  <h5 className="text-[#666666] uppercase">
                    patient of <span className="text-[#0cb8b6]">surgery</span>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials6;
