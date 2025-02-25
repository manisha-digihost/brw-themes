import React, { useState } from "react";
import img1 from "./../../assets/images/gallery/gallery1.webp"
import img2 from "./../../assets/images/gallery/gallery2.webp"
import img3 from "./../../assets/images/gallery/gallery3.webp"
import img4 from "./../../assets/images/gallery/gallery4.webp"
import img5 from "./../../assets/images/gallery/gallery5.webp"
import img7 from "./../../assets/images/gallery/gallery7.webp"

const Gallery5 = () => {
  const [category, setCategory] = useState("all");

  const galleryImages = [
    { id: 1, category: "nature", thumbnail: img1 },
    { id: 2, category: "architecture", thumbnail: img2 },
    { id: 3, category: "nature", thumbnail: img3 },
    { id: 4, category: "animals", thumbnail: img4 },
    { id: 5, category: "architecture", thumbnail: img5 },
    { id: 6, category: "animals", thumbnail: img7  },
  ];

  const filteredImages = category === "all" 
    ? galleryImages 
    : galleryImages.filter((image) => image.category === category);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-9 w-lg">
              <h2 className="text-5xl  uppercase font-bold mb-2">Happy Client Says About our company</h2>
              <span className="text-sm text-red-600 underline ">Some Standard Serivices</span>
            </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-3 mb-6">
          {["all", "nature", "architecture", "animals"].map((filter) => (
            <button
              key={filter}
              onClick={() => setCategory(filter)}
              className={`px-4 py-2 rounded-full transition 
                ${category === filter ? "bg-red text-white" : "bg-gray-200 hover:bg-denger hover:text-white"}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-lg">
              <img 
                src={image.thumbnail} 
                alt="Gallery" 
                className="w-full h-80 object-cover transition-transform transform hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery5;
