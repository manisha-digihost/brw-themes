import React, { useState } from "react";
import img1 from "./../../assets/images/gallery/gallery1.webp";
import img2 from "./../../assets/images/gallery/gallery2.webp";
import img3 from "./../../assets/images/gallery/gallery3.webp";
import img4 from "./../../assets/images/gallery/gallery4.webp";
import img5 from "./../../assets/images/gallery/gallery5.webp";
import img7 from "./../../assets/images/gallery/gallery7.webp";

const Gallery8 = () => {
  const [category, setCategory] = useState("all");

  const galleryImages = [
    { id: 1, category: "nature", thumbnail: img1 },
    { id: 2, category: "architecture", thumbnail: img2 },
    { id: 3, category: "nature", thumbnail: img3 },
    { id: 4, category: "animals", thumbnail: img4 },
    { id: 5, category: "architecture", thumbnail: img5 },
    { id: 6, category: "animals", thumbnail: img7 },
  ];

  const filteredImages =
    category === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === category);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        {/* <div className="mb-9 w-lg">
          <h2 className="text-5xl  uppercase font-bold mb-2">
            Happy Client Says About our company
          </h2>
          <span className="text-sm text-red-600 underline ">
            Some Standard Serivices
          </span>
        </div> */}
        <div className="w-[65%] mx-auto">
          <div className="text-center bs5-heading-sec mb-10">
          <h2 className="text-3xl text-white uppercase font-bold mb-2">
          Where Inovation Meet <br />
          Interior Design
           
          </h2>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="text-center">
          <div className="inline-block  space-x-3 mb-6 ">
            {["all", "nature", "architecture", "animals"].map((filter) => (
              <button
                key={filter}
                onClick={() => setCategory(filter)}
                className={`p-5 transition text-white border 
                ${
                  category === filter
                    ? "text-white bg-[#a6a182] text-[17px] uppercase font-medium  relative "
                    : "hover:bg-denger hover:text-[#a6a182] text-[17px] uppercase font-medium"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden  h-[25rem]"
            >
              <img
                src={image.thumbnail}
                alt="Gallery"
                className="w-full h-[100%] object-cover object-center transition-transform transform hover:scale-105 duration-300 ease-in"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery8;
