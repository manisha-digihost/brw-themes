import React from "react";
import { useState } from "react";

function Hero1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://img.freepik.com/free-vector/artificial-intelligence-ai-destroying-blue-face_1017-21767.jpg?t=st=1737455626~exp=1737459226~hmac=fd23d4c553ecc2b468ee473329d1614eb35c84d03218f71a6f825ea048023e71&w=900",
      title: "Welcome to Best Rate",
      description:
        "Providing the best financial solutions for your business growth",
      buttonText: "Get Started",
    },
    {
      image:
        "https://img.freepik.com/free-photo/robot-handshake-human-background-artificial-intelligence-digital-transformation_53876-129769.jpg?t=st=1737455679~exp=1737459279~hmac=f8fe39367c4caefe60d481e9516c8827cbc129ee51fd0d20fcb60d4cc9fd6b8e&w=900",
      title: "Professional Financial Services",
      description: "Expert guidance to help you achieve your financial goals",
      buttonText: "Our Services",
    },
    {
      image:
        "https://img.freepik.com/free-photo/robot-with-laptop-computer-mouse_1048-3560.jpg?t=st=1737455780~exp=1737459380~hmac=35e58813bdb446016c98b7ed47d739866bbb46de629d5dbd009504687b8de395&w=900",
      title: "Trusted by Thousands",
      description:
        "Join our satisfied clients and experience excellence in service",
      buttonText: "Contact Us",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="container mx-auto h-full px-4">
                <div className="flex h-full items-center justify-center text-center">
                  <div className="animate-slideUp">
                    <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="mb-4 text-lg text-dark md:text-xl">
                      {slide.description}
                    </p>
                    <button className="rounded-full bg-primary px-8 py-3 text-lg text-white transition-transform hover:scale-105">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s forwards;
        }
      `}</style>
    </section>
  );
}

export default Hero1;
