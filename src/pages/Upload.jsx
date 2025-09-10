import React from "react";
import sman from "../assets/features/sman.webp";
import upload from "../assets/features/upload.webp";
import camera from "../assets/features/camera.webp";

export default function UploadSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#FFF6ED] min-h-screen p-4 sm:p-6 md:p-12 gap-6 md:gap-12 overflow-hidden">
     
      <div className="flex flex-col items-center md:items-start w-full max-w-[280px]">
        <img
          src={sman}
          alt="Farmer with crops"
          className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[180px] lg:max-w-[260px] h-auto"
        />
        
        <p className="mt-4 text-sm sm:text-base text-center md:hidden text-gray-800 font-medium leading-snug px-2">
          Detect the disease by simply uploading a picture
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm md:max-w-md">
        <div className="bg-[#FFF6ED] shadow-2xl rounded-2xl p-4 sm:p-6 md:p-8 w-full md:h-[35vh] flex flex-col items-center justify-center">
     
          <img
            src={upload}
            alt="Upload"
            className="hidden md:block w-16 sm:w-20 lg:w-[11vw] h-auto mb-3"
          />
          <img
            src={camera}
            alt="Camera"
            className="block md:hidden w-12 sm:w-16 h-auto mb-4"
          />

          <button className="bg-[#1A3172] hover:bg-[#1A3151] text-white font-semibold py-2 px-4 rounded-xl shadow text-sm sm:text-base">
            Upload Image
          </button>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 text-center leading-snug px-2">
            Or drop a file, paste image or url
          </p>
        </div>

    
        <p className="mt-6 text-gray-800 font-medium hidden md:block text-base lg:text-lg leading-snug text-center">
          Detect the disease by simply uploading a picture
        </p>
      </div>
    </div>
  );
}
