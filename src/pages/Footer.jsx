import React from "react";
import { Instagram, Twitter, Github, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white flex flex-col items-center px-6 py-10 space-y-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center tracking-wider drop-shadow-md">
        You can help Shape the Future
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-6 text-base sm:text-lg font-medium">
        <a href="/" className="hover:underline hover:text-yellow-300 transition-colors">
          Home
        </a>
        <a href="/forum" className="hover:underline hover:text-yellow-300 transition-colors">
          Open Chat Forum
        </a>
        <a href="/contact" className="hover:underline hover:text-yellow-300 transition-colors">
          Contact Us
        </a>
      </div>

      <div className="flex gap-6">
        {[Instagram, Twitter, Github, Youtube].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="p-2 rounded-full bg-green-700 hover:bg-yellow-400 hover:text-green-900 transition-colors shadow-md"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>

      <div className="mt-6 text-3xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-200 drop-shadow-lg tracking-widest">
        AGRI RAKSHAK
      </div>

      <div className="text-sm sm:text-base text-gray-200 mt-2">
        &copy; {new Date().getFullYear()} Agri Rakshak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
