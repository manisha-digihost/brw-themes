import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-lightAlt py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-[90%] bg-darkAlt">
              <div className="img-container bg-darkAlt">
                {/* <img src="" alt="" className="w-full h-full object-cover" /> */}
              </div>
            </div>
            <div className="w-full">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  About Best-Rate
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis molestiae perferendis facere
                  sit. Dignissimos laboriosam quam sunt modi est harum
                  reiciendis rem blanditiis necessitatibus reprehenderit?
                </p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  fugiat porro quas ducimus quis molestiae perferendis facere
                  sit. Dignissimos laboriosam quam sunt modi est harum
                  reiciendis rem blanditiis necessitatibus reprehenderit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
