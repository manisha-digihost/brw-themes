import { section } from "motion/react-client";
import React, { useState } from "react";

const Gallery8 = () => {
  return (
    <section className="bg-[#fff] px-4 md:px-[5rem] py-20">

         <div className="text-center">
              <span className="text-lg text-[#FE704B] ">Our Gallery</span>
              <h2 className="text-4xl text-[#0B2239] font-600 mb-2">Our Customer Said<strong> About Pet Care</strong></h2>
              <p className="text-[#555555]">Conveniently customize proactive services leveraged without <br /> continualliery aggregate fricctionle ou wellies</p>
            </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/500/400?id=1"
              alt="Dog 1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/500/500?id=2"
              alt="Dog 2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/400/500?id=3"
              alt="Dog 3"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/450/400?id=4"
              alt="Dog 4"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/500/450?id=5"
              alt="Dog 5"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/420/520?id=6"
              alt="Dog 6"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/480/420?id=7"
              alt="Dog 7"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/530/480?id=8"
              alt="Dog 8"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/510/510?id=9"
              alt="Dog 9"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/490/470?id=10"
              alt="Dog 10"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/460/530?id=11"
              alt="Dog 11"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://placedog.net/520/520?id=12"
              alt="Dog 12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery8;
