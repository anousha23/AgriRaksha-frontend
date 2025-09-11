import React from "react";
import {
  Instagram,
  Twitter,
  Github,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white flex flex-col  items-center px-6 py-8 max-h-[45vh] overflow-hidden">
      
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
        You can help Shape the future
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm sm:text-base">
        <a href="/" className="hover:underline">Home</a>
        <a href="/forum" className="hover:underline">Open chat forum</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
      </div>

      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-200">
          <Instagram size={24} />
        </a>
        <a href="#" className="hover:text-gray-200">
          <Twitter size={24} />
        </a>
        <a href="#" className="hover:text-gray-200">
          <Github size={24} />
        </a>
        <a href="#" className="hover:text-gray-200">
          <Youtube size={24} />
        </a>
      </div>

      <div className="text-[10vw] font-bold text-center">
        AGRI RAKSHAK
      </div>
    </footer>
  );
};

export default Footer;