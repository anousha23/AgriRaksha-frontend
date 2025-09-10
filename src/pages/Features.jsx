import React from "react";
import { CloudUpload, ShoppingCart, BookOpen, Landmark, Zap, Search } from "lucide-react"; 
import cropt from "../assets/features/cropt.webp";
import gov from "../assets/features/gov.webp";
import hub from "../assets/features/hub.webp";
import snudge from "../assets/features/snudge.webp";
import store from "../assets/features/store.webp";
import upload from "../assets/features/upload.webp";

const Features = () => {
  const items = [
    {
      title: "Upload",
      icon: <img src={upload} alt="Crop Analysis" className="w-[40vw] md:w-[32vw] lg:w-[20vw] "/>,
      color: "bg-[#a8bfa2]",
      className: "row-span-3 col-span-2",
    },
    {
      title: "Crop Analysis",
      icon: <img src={cropt} alt="Crop Analysis" className="w-[40vw] md:w-[18vw] lg:w-[10vw]"/>,
      color: "bg-[#b57f55]",
      className: "row-span-2 col-span-2",
    },
    {
      title: "Smart Nudge",
      icon: <img src={snudge} alt="Crop Analysis" className="w-[25vw] md:w-[14vw] lg:w-[3vw]"/>,
      color: "bg-[#d6c15c]",
      className: "col-span-1",
    },
    {
      title: "Gov Schemes",
      icon: <img src={gov} alt="Crop Analysis" className="w-[25vw] md:w-[14vw] lg:w-[3vw]"/>,
      color: "bg-[#f1ede4]",
      className: "col-span-1",
    },
    {
      title: "Online Store",
      icon: <img src={store} alt="Crop Analysis" className="w-[40vw] md:w-[20vw] lg:w-[3vw]"/>,
      color: "bg-[#a08e7a]",
      className: "col-span-2",
    },
    {
      title: "Knowledge Hub",
      icon: <img src={hub} alt="Crop Analysis" className="w-[30vw] md:w-[18vw] lg:w-[3vw]"/>,
      color: "bg-[#9bb382]",
      className: "col-span-2",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-yellow-400 flex justify-center items-center p-6">
      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg::grid-rows-4 gap-4 max-w-6xl w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.color} ${item.className} flex flex-col items-center justify-center rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg p-6`}
          >
            <div className="text-gray-800 mb-2">{item.icon}</div>
            <p className="text-lg font-semibold text-gray-900">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
