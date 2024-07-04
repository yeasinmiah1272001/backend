import React from "react";
import banner from "../assets/banner.mp4";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover absolute top-0 left-0 sm:object-fill md:object-contain lg:object-scale-down xl:object-cover"
        autoPlay
        loop
        muted
      >
        <source src={banner} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <div className="w-full mt-10 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 max-w-md p-6 bg-gray-800 bg-opacity-75 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 sm:dark:bg-gray-700 md:dark:bg-gray-600 lg:dark:bg-gray-500 xl:dark:bg-gray-400">
          <h1 className="text-4xl">Enjoy Your Life</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
