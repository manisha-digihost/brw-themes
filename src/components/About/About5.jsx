import React from "react";

const About5 = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-5/12">
            <div className="pr-0 lg:pr-10 mb-8 lg:mb-0">
              <span className="text-primary-600 font-semibold mb-4 inline-block">
                About Us
              </span>
              <h2 className="text-4xl font-bold mb-6">About Best-Rate</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                fugiat porro quas ducimus quis molestiae perferendis facere sit.
                Dignissimos laboriosam quam sunt modi est harum reiciendis rem
                blanditiis necessitatibus reprehenderit?
              </p>
              <div>
                <button className="bg-primary-600 text-white px-8 py-3 rounded-full transform transition hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="relative mt-2">
              <div className="rounded-lg overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full shadow-lg rounded-lg"
                >
                  <source
                    src="https://cdn.pixabay.com/video/2023/01/13/146336-789093861_large.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute bottom-8 right-8 bg-primary-600 text-white p-6 rounded-full flex flex-col items-center justify-center shadow-lg min-w-[150px] min-h-[150px] md:min-w-[120px] md:min-h-[120px] sm:min-w-[100px] sm:min-h-[100px]">
                <h3 className="text-4xl font-bold mb-0 md:text-3xl sm:text-2xl">
                  15+
                </h3>
                <p className="text-center mb-0 sm:text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767.98px) {
          .experience-badge {
            position: relative;
            left: 10%;
            top: 80%;
            transform: translateY(-50%);
            height: 150px;
            width: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default About5;
