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
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900 opacity-15"></div>

            <div className="relative z-20">
              <Navbar/>
              </div>


            {/* Hero Content */}
            <div className="relative z-10 flex-grow flex flex-col justify-center text-center p-6">
                <div className="relative ml-10 -top-18">
                    {/* Bottom div */}
                    <div className="w-80 h-48 bg-gray-200"></div>

                    {/* Top div with text */}
                    <div className="absolute top-6 -left-6 w-80 h-48 bg-gray-300 flex items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                            Agri-Rakshak
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
