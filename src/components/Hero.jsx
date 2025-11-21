import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import heroImage from "../assets/hero-image2.jpg"; // relative path

const HeroSearch = () => {
  const [activeTab, setActiveTab] = useState("Sell");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(4.5);
  const [hoverRating, setHoverRating] = useState(0);
  const starCount = 5;

  const handleSearch = () => {
    if (!location) {
      setError("Please enter a location to search.");
    } else {
      setError("");
      alert(`${activeTab} search for: ${location}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-4 md:px-10 py-10 bg-gray-50">
      
      {/* ---------------- Left Content ---------------- */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center md:text-left">
          Find Your Best Real Estate
        </h1>

        {/* Search Card */}
        <div className="w-full sm:w-3/4 md:w-3/4 bg-white rounded-2xl shadow-lg p-6 
                        transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">

          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-4">
            {["Sell", "Buy"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 text-center py-2 font-medium transition-all duration-300 
                text-sm sm:text-base md:text-lg ${
                  activeTab === tab
                    ? "border-b-2 border-indigo-600 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="mb-2 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600">
              <FaMapMarkerAlt />
            </span>
            <input
              type="text"
              placeholder="Search Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-10 py-2 
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 
                         focus:border-indigo-400 transition-all duration-300 
                         text-sm sm:text-base"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <button
              onClick={handleSearch}
              className="bg-indigo-600 text-white py-2 rounded-lg font-medium 
                         hover:bg-indigo-700 transition-all duration-300 ease-in-out"
            >
              Search
            </button>

            <button className="bg-indigo-300 text-white py-2 rounded-lg font-medium 
                               hover:bg-indigo-400 transition-all duration-300 ease-in-out">
              Advance Search
            </button>
          </div>
        </div>

        {/* Stars & Reviews */}
        <div className="flex flex-col items-start mt-4 px-4">
          <div className="flex space-x-1 text-2xl sm:text-3xl text-yellow-500">
            {Array.from({ length: starCount }).map((_, index) => {
              const starValue = index + 1;
              return (
                <FaStar
                  key={index}
                  className={`cursor-pointer transition-colors duration-300 ${
                    starValue <= (hoverRating || rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  } transform hover:scale-125`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              );
            })}
          </div>

          <span className="text-gray-700 mt-1 px-2 text-lg sm:text-xl">
            {rating}/5 - from 658 reviews
          </span>
        </div>
      </div>

      {/* ---------------- Right Image (Dark Overlay) ---------------- */}
      <div className="flex-1 hidden md:block relative overflow-hidden shadow-xl rounded-2xl">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-[480px] object-cover transform -scale-x-100"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </div>
  );
};

export default HeroSearch;
