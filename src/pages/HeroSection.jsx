import React from "react";
import Navbar from "./Navbar";
import backgroundImageSvg from "/bckgrd.svg";

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-black"
      style={{
        backgroundImage: `url('${backgroundImageSvg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-15"></div>

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative z-10 flex-grow flex flex-col justify-center text-center p-6">
       <div className="relative ml-6 sm:ml-10 md:ml-16 -top-[30vh] sm:-top-[10vh] md:-top-[14vh]">

          <div className="w-56 h-32 sm:w-72 sm:h-40 md:w-96 md:h-56 bg-gray-200 opacity-70"></div>

          <div className="absolute top-4 -left-4 sm:top-6 sm:-left-6 md:top-8 md:-left-8 w-56 h-32 sm:w-72 sm:h-40 md:w-96 md:h-56 bg-gray-300 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Agri-Rakshak
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
