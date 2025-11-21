import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-blue-600 to-indigo-700"
      } shadow-xl sticky top-0 z-50 transition-colors duration-500`}
    >
      {/* -------------------- MAIN CONTAINER -------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* -------------------- TOP NAVBAR ROW -------------------- */}
        <div className="flex justify-between items-center h-16">
          {/* LEFT: LOGO */}
          <div className="flex-shrink-0">
            <div className="text-3xl font-extrabold text-white tracking-wide cursor-pointer hover:text-yellow-400 transform transition-colors duration-300">
              Property
            </div>
          </div>

          {/* CENTER: NAVIGATION (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Properties", "Blogs", "Contact", "Documentation"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="relative text-white font-medium hover:text-yellow-400 transition-colors duration-300 group"
                >
                  {link}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
                </a>
              )
            )}
          </div>

          {/* RIGHT: DARK MODE + AUTH BUTTONS (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white text-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            <button className="bg-transparent text-white border border-white px-4 py-1 rounded-full hover:bg-white hover:text-indigo-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
              Sign In
            </button>

            <button className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold hover:bg-yellow-500 hover:shadow-lg hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </div>

          {/* MOBILE MENU BUTTON (HAMBURGER) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* -------------------- MOBILE DROPDOWN MENU -------------------- */}
        <div
          className={`md:hidden flex flex-col space-y-4 py-4 overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile Navigation Links */}
          {["Home", "Properties", "Blogs", "Contact", "Documentation"].map(
            (link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-white text-lg font-medium px-2 hover:text-yellow-400 transition-all"
              >
                {link}
              </a>
            )
          )}

          <hr className="border-gray-400" />

          {/* Mobile Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Mobile Sign In */}
          <button className="bg-transparent text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-indigo-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
            Sign In
          </button>

          {/* Mobile Sign Up */}
          <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:shadow-lg hover:scale-105 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
