import React, { useState, useEffect } from "react";
import { Search, User, Menu, X } from "lucide-react";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.toLowerCase();

    if (query.includes("feature")) {
      scroller.scrollTo("features", {
        smooth: true,
        duration: 600,
        offset: 120,
      });
    } else if (query.includes("footer")) {
      scroller.scrollTo("footer", {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    } else if (query.includes("home") || query.includes("hero")) {
      scroller.scrollTo("home", {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    } else {
      alert("No matching section found!");
    }

    setSearchTerm("");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full flex justify-center fixed top-0 left-0 right-0 z-50 transition-transform duration-300 
        
      `}
    >
      <div className="flex items-center justify-between w-11/12 md:w-4/5 lg:w-2/3 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full px-6 py-3 mt-4 shadow-lg">

        <div
          className="text-lg md:text-2xl font-bold text-gray-800 cursor-pointer"
          onClick={() => scroller.scrollTo("home", { smooth: true, duration: 600, offset: -80 })}
        >
          Brand
        </div>

        <div className="hidden lg:flex items-center space-x-8 text-lg font-medium text-gray-800">
          <ScrollLink
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-gray-600 transition"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-gray-600 transition"
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={600}
            offset={120}
            className="cursor-pointer hover:text-gray-600 transition"
          >
            Features
          </ScrollLink>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search sections..."
              className="w-32 sm:w-48 md:w-64 pl-10 pr-4 py-2 rounded-full bg-white/80 backdrop-blur text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </form>

          <button className="p-2 rounded-full bg-white/70 hover:bg-white transition-colors duration-200 shadow">
            <User className="w-6 h-6 text-gray-800" />
          </button>

          <button
            className="lg:hidden p-2 rounded-full bg-white/70 hover:bg-white transition-colors duration-200 shadow"
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
          <div className="absolute top-full left-0 right-0 mt-3 mx-auto w-11/12 bg-gradient-to-r from-green-300 to-emerald-400 rounded-xl shadow-lg flex flex-col items-center space-y-4 py-4 lg:hidden z-50">
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-gray-700 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-gray-700 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="features"
              smooth={true}
              duration={600}
              offset={120}
              className="hover:text-gray-700 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </ScrollLink>

            <form onSubmit={handleSearch} className="relative w-10/12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search sections..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/80 backdrop-blur text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
