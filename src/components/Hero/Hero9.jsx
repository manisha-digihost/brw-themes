import React from "react";
import banner2 from "../../assets/images/02.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosCall } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const Hero9 = () => {
 
  return (
    <div className="bg-[#FFF3EF] h-[90vh] overflow-hidden">
      <div className="ps-4 md:ps-[10rem] pt-7" >
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h1 className="text-[#1f2022] text-[3.5rem] leading-[4rem]">Treating Your Pet  <span className="text-[#1f2022] font-semibold text-[3.5rem] leading-[3.5rem]">By</span>
               <br />

              <span className="text-[#1f2022] font-semibold text-[3.5rem]">Our Professional</span><br />
              Vets
            </h1>
            <p className="text-[#1f2022] font-normal text-[1rem]">
              Haldaa is a platform that connects you with the best services in your area. Whether you need a plumber, electrician, or cleaner, we have you covered.
            </p>
            <div className="flex">
              <Link to="#!" className="btn px-8 py-3 bg-[#FE704B] text-white rounded-md font-semibold text-[1rem] hover:bg-[#1f2022] hover:text-[#FFF3EF] transition duration-300 ease-in-out flex items-center gap-2">
                Appointment Now
              </Link>
              <Link to="#!" className="btn px-8 py-3 bg-[#fff] text-[#FE704B] rounded-md font-semibold text-[1rem] hover:bg-[#1f2022] hover:text-[#FFF3EF] transition duration-300 ease-in-out flex items-center gap-2 ml-4">
              <IoIosCall />

                  (229) 555-0123
              </Link>
            </div>
         
          </div>
          <div className="w-full md:w-1/2 flex justify-center h-[90vh]">
            <img src={banner2} alt="Banner" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero9;
