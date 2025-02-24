import React from "react";
import { useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Import required lightgallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";

const Gallery5 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const galleryImages = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Massimiliano Morosinotto",
      photographerLink: "https://unsplash.com/@therawhunter",
      location: "Tre Cime di Lavaredo, Italia",
      locationLink:
        "https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia",
      caption: "This is the Way",
      description:
        "Stunning mountain landscape captured at sunrise, showcasing nature's raw beauty.",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Sascha Bosshard",
      photographerLink: "https://unsplash.com/@thesaboo",
      location: "Pizol, Mels, Schweiz",
      locationLink: "https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz",
      description:
        "Majestic Swiss Alps vista showing the pristine snow-covered peaks.",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Yusuf Evli",
      photographerLink: "https://unsplash.com/@yusufevli",
      caption: "Foggy Road",
      description:
        "Mysterious foggy road creating an atmospheric and moody scene.",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      photographer: "fynn",
      photographerLink: "https://unsplash.com/@fynn_it",
      location: "Big Sur, United States",
      locationLink: "https://unsplash.com/s/photos/big-sur%2C-united-states",
      description:
        "Breathtaking coastal view of Big Sur's dramatic cliffs and ocean.",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
      photographer: "Yusuf Evli",
      photographerLink: "https://unsplash.com/@yusufevli",
      caption: "Foggy Road",
      description:
        "Mysterious foggy road creating an atmospheric and moody scene.",
    },
    {
      id: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      fullSize:
        "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      photographer: "fynn",
      photographerLink: "https://unsplash.com/@fynn_it",
      location: "Big Sur, United States",
      locationLink: "https://unsplash.com/s/photos/big-sur%2C-united-states",
      description:
        "Breathtaking coastal view of Big Sur's dramatic cliffs and ocean.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-2 rounded-full mb-2 bg-primary text-white">
            Our Portfolio
          </span>
          <h2 className="text-4xl font-bold mb-3">Capturing Moments</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of stunning photographs that tell compelling
            stories
          </p>
        </div>

        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgZoom, lgVideo, lgThumbnail]}
          mode="lg-fade"
          download={false}
          counter={true}
          elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              data-src={image.fullSize}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.thumbnail}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-semibold mb-2">
                    {image.caption || `Beautiful Scene ${image.id}`}
                  </h3>
                  <p className="text-gray-200 mb-0">{image.description}</p>
                  <small className="mt-2">Click to view full size</small>
                </div>
              </div>
            </div>
          ))}
        </LightGallery>
      </div>
    </section>
  );
};

export default Gallery5;
