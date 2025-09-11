import React from "react";
import Hero from "../pages/HeroSection"; 
import Footer from "../pages/Footer"; 
import { motion } from "framer-motion";

const Landing = () => {
  const featureTexts = [
    {
      title: "Upload",
      description:
        "Easily upload crop images for instant analysis.\nOur AI helps you detect issues quickly.\nSave time and improve yields.",
    },
    {
      title: "Weather",
      description:
        "Get real-time weather advisories.\nStay updated with hyperlocal forecasts.\nPlan farming activities smartly.",
    },
    {
      title: "Silo",
      description:
        "Find nearby storage facilities for your produce.\nReduce post-harvest losses.\nStore crops safely and efficiently.",
    },
    {
      title: "Market Price Trends",
      description:
        "AI-powered insights into produce rates.\nTrack market trends with ease.\nMaximize your profits.",
    },
    {
      title: "Smart Nudge",
      description:
        "Receive timely alerts and recommendations.\nNever miss critical farming updates.\nMake data-driven decisions.",
    },
    {
      title: "Gov Schemes",
      description:
        "Stay updated with the latest government schemes.\nAccess subsidies and benefits easily.\nEmpower your farming journey.",
    },
    {
      title: "Online Store",
      description:
        "Buy and sell farm products with ease.\nReach a wider market directly.\nEnhance your farm income digitally.",
    },
    {
      title: "Knowledge Hub",
      description:
        "Learn and explore modern farming techniques.\nStay ahead with agricultural insights.\nGrow smarter every season.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F6E6CB] flex flex-col">
      <Hero />

      <section className="relative py-16 px-6 max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black"></div>

        <div className="space-y-12 relative">
          {featureTexts.map((item, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ x: fromLeft ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 px-6 ${
                  fromLeft ? "text-right md:pr-12" : "text-left md:pl-12 md:ml-auto"
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;