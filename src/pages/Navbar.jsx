import React, { useState, useEffect } from "react";
import { Search, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full flex justify-center fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between w-11/12 md:w-4/5 lg:w-2/3 bg-[#9BD2B2] rounded-full px-6 py-2 mt-4">
        <div className="text-lg font-bold">Brand</div>

        <div className="hidden lg:flex items-center space-x-8 text-lg font-medium">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <a href="#" className="hover:text-gray-700">
            About Us
          </a>
          <a href="#" className="hover:text-gray-700">
            Features
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-32 sm:w-48 md:w-64 pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none"
            />
          </div>

          <button className="p-2 rounded-full hover:bg-green-200 transition-colors duration-200">
            <User className="w-6 h-6 text-gray-800" />
          </button>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-green-200 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#9BD2B2] rounded-xl shadow-lg flex flex-col items-center space-y-4 py-4 lg:hidden z-50">
            <a href="#" className="hover:text-gray-700">
              Home
            </a>
            <a href="#" className="hover:text-gray-700">
              About Us
            </a>
            <a href="#" className="hover:text-gray-700">
              Features
            </a>

            <div className="relative w-10/12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
