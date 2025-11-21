import React from "react";
import { FaInstagram, FaTwitter, FaEllipsisH } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo / Brand */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-blue-500">Property</h1>
            <p className="text-gray-400">
              Real estate solutions for buying, selling, and renting properties.
            </p>
          </div>

          {/* Address & Social */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p className="text-gray-400 mb-6">
              4263 Wilkinson Street, Tennessee
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-transform transform hover:scale-110 shadow-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-transform transform hover:scale-110 shadow-lg"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-transform transform hover:scale-110 shadow-lg"
              >
                <FaEllipsisH />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-400 space-y-3">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
            <ul className="text-gray-400 space-y-3">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Apartment for Rent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  House for Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Offices for Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Shop for Rent
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-gray-500 text-center text-sm">
          © 2025 Property. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
