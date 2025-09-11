import React from "react";
import { Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center mt-4">
      <div className="flex items-center justify-between w-11/12 md:w-4/5 lg:w-2/3 bg-[#9BD2B2] rounded-full px-6 py-2">
        
        {/* Links */}
        <div className="flex items-center space-x-8 text-lg font-medium">
          <a href="#" className="hover:text-gray-700">Home</a>
          <a href="#" className="hover:text-gray-700">About Us</a>
          <a href="#" className="hover:text-gray-700">Features</a>

        </div>

        {/* Right side: Search bar + User icon */}
        <div className="flex items-center space-x-4">
          {/* Search bar with icon inside */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-32 sm:w-48 md:w-64 pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* User Icon */}
          <button className="p-2 rounded-full hover:bg-green-200 transition-colors duration-200">
            <User className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
