import React from "react";
import { Link } from "react-router-dom";
import cropt from "../assets/features/cropt.webp";
import gov from "../assets/features/gov.webp";
import hub from "../assets/features/hub.webp";
import snudge from "../assets/features/snudge.webp";
import store from "../assets/features/store.webp";
import upload from "../assets/features/upload.webp";
import storage from "../assets/features/storage.webp";
import weather from "../assets/features/weather.webp";

const Features = () => {
  const items = [
    {
      title: "Upload",
      description: "Easily upload leaf images for instant analysis.",
      route: "/upload",
      icon: (
        <img
          src={upload}
          alt="Upload"
          className="w-[40vw] md:w-[16vw] lg:w-[10vw]"
        />
      ),
      color: "bg-[#B6C7AA]",
      className: "col-span-1 md:row-span-1 md:col-span-2",
    },
    {
      title: "Weather",
      route: "/weather",
      description: "Get real-time weather advisories and forecasts.",
      icon: (
        <img
          src={weather}
          alt="Weather"
          className="w-[30vw] md:w-[10vw] lg:w-[6vw]"
        />
      ),
      color: "bg-[#C9DABF]",
      className: "col-span-1 md:row-span-1",
    },
    {
      title: "Online Store",
      description: "Buy and sell farm products.",
      icon: (
        <img
          src={store}
          alt="Online Store"
          className="w-[30vw] md:w-[12vw] lg:w-[5vw]"
        />
      ),
      color: "bg-[#A08E7AA3]",
      className: "col-span-1 md:row-span-1",
    },
    {
      title: "Market Price Trends",
      route: "/silo",
      description: "Get AI-powered insights into produce rates.",
      icon: (
        <img
          src={cropt}
          alt="market price trends"
          className="w-[30vw] md:w-[12vw] lg:w-[7vw]"
        />
      ),
      color: "bg-[#B17F59]",
      className: "col-span-1 md:row-span-1 md:col-span-2",
    },
    {
      title: "Smart Nudge",
      route: "/smartnudge",
      description: "Receive timely weather alerts.",
      icon: (
        <img
          src={snudge}
          alt="Smart Nudge"
          className="w-[30vw] md:w-[8vw] lg:w-[6vw]"
        />
      ),
      color: "bg-[#C1CFA170]",
      className: "col-span-1 md:col-span-1",
    },
    {
      title: "Govt. Schemes",
      route: "/schemes",
      description: "Stay updated with latest government schemes.",
      icon: (
        <img
          src={gov}
          alt="Gov Schemes"
          className="w-[30vw] md:w-[8vw] lg:w-[6vw]"
        />
      ),
      color: "bg-[#EDE8DC]",
      className: "col-span-1 md:col-span-1",
    },
    {
      title: "Silo and Cold Storage",
      route: "/silo",
      description: "Find nearby storage facilities for your produce.",
      icon: (
        <img
          src={storage}
          alt="Silo"
          className="w-[26vw] md:w-[10vw] lg:w-[6vw]"
        />
      ),
      color: "bg-[#D7C0AE]",
      className: "col-span-1 md:col-span-2",
    },
    {
      title: "Knowledge Hub",
      route: "/knowledge",
      description: "Learn and explore modern farming techniques.",
      icon: (
        <img
          src={hub}
          alt="Knowledge Hub"
          className="w-[26vw] md:w-[12vw] lg:w-[5vw]"
        />
      ),
      color: "bg-[#A5B68D]",
      className: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <div className="w-full h-full bg-[#F6E6CB] flex justify-center items-center py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-rows-3 gap-3 max-w-6xl w-full h-full">
        {items.map((item, index) => {
          const Wrapper = item.route ? Link : "div";
          return (
            <Wrapper
              key={index}
              to={item.route}
              className={`${item.color} ${item.className} relative group flex flex-col items-center justify-center rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg p-3 w-full max-h-[180px]`}
            >
              <div className="text-gray-800 mb-1">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-900 text-center">
                {item.title}
              </p>
              <p className="text-xs text-gray-700 mt-1 text-center">
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
