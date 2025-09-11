import React from "react";
import { Link } from "react-router-dom";
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
      description: "Easily upload crop images for instant analysis.",
      route: "/upload",
      icon: (
        <img
          src={upload}
          alt="Upload"
          className="w-[40vw] md:w-[32vw] lg:w-[20vw]"
        />
      ),
      color: "bg-[#B6C7AA]",
      className: "row-span-3 col-span-2",
    },
    {
      title: "Crop Analysis",
      description: "Get AI-powered insights into crop health.",
      icon: (
        <img
          src={cropt}
          alt="Crop Analysis"
          className="w-[40vw] md:w-[18vw] lg:w-[10vw]"
        />
      ),
      color: "bg-[#B17F59]",
      className: "row-span-2 col-span-2",
    },
    {
      title: "Smart Nudge",
      description: "Receive timely alerts and recommendations.",
      icon: (
        <img
          src={snudge}
          alt="Smart Nudge"
          className="w-[40vw] md:w-[14vw] lg:w-[3vw]"
        />
      ),
      color: "bg-[#C1CFA170]", 
      className: "col-span-full md:col-span-1",
    },

    {
      title: "Gov Schemes",
      description: "Stay updated with latest government schemes.",
      icon: (
        <img
          src={gov}
          alt="Gov Schemes"
          className="w-[40vw] md:w-[14vw] lg:w-[3vw]"
        />
      ),
      color: "bg-[#EDE8DC]",
      className: "col-span-full md:col-span-1",
    },

    {
      title: "Online Store",
      description: "Buy and sell farm products with ease.",
      icon: (
        <img
          src={store}
          alt="Online Store"
          className="w-[40vw] md:w-[20vw] lg:w-[3vw]"
        />
      ),
      color: "bg-[#A08E7AA3]", 
      className: "col-span-2",
    },

    {
      title: "Knowledge Hub",
      description: "Learn and explore modern farming techniques.",
      icon: (
        <img
          src={hub}
          alt="Knowledge Hub"
          className="w-[30vw] md:w-[18vw] lg:w-[3vw]"
        />
      ),
      color: "bg-[#A5B68D]",
      className: "col-span-2",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F6E6CB] flex justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-rows-4 gap-4 max-w-6xl w-full">
        {items.map((item, index) => {
          const Wrapper = item.route ? Link : "div";
          return (
            <Wrapper
              key={index}
              to={item.route}
              className={`${item.color} ${item.className} relative group flex flex-col items-center justify-center rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg p-6`}
            >
              <div className="text-gray-800 mb-2">{item.icon}</div>
              <p className="text-lg font-semibold text-gray-900">
                {item.title}
              </p>

              <p className="text-sm text-gray-700 mt-2 block text-center">
                {item.description}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
