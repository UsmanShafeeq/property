import React from "react";
import { FaHeart, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

import apartment from "../assets/FeaturedProperties/apartment.jpg";
import cityApartment from "../assets/FeaturedProperties/city-apartment.jpg";
import luxuryApartment from "../assets/FeaturedProperties/luxaryapparment.jpg";
import palm from "../assets/FeaturedProperties/palm.jpg";
import SunsetVilla from "../assets/FeaturedProperties/SunsetVilla.jpg";
import MithraVilla from "../assets/FeaturedProperties/MithraVilla.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      type: "Sell",
      title: "Modern Family House",
      location: "California, USA",
      price: "$850,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2500 sqft",
      image: apartment,
    },
    {
      id: 2,
      type: "Buy",
      title: "Luxury Villa",
      location: "Dubai, UAE",
      price: "$2,500,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4500 sqft",
      image: cityApartment,
    },
    {
      id: 3,
      type: "Sell",
      title: "Commercial Office",
      location: "New York, USA",
      price: "$1,200,000",
      bedrooms: 0,
      bathrooms: 2,
      area: "3500 sqft",
      image: luxuryApartment,
    },
    {
      id: 4,
      type: "Buy",
      title: "Beachfront House",
      location: "Miami, USA",
      price: "$1,550,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3000 sqft",
      image: palm,
    },
    {
      id: 5,
      type: "Sell",
      title: "Sunset Villa",
      location: "Los Angeles, USA",
      price: "$1,900,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4000 sqft",
      image: SunsetVilla,
    },
    {
      id: 6,
      type: "Buy",
      title: "Mithra Villa",
      location: "San Diego, USA",
      price: "$2,200,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "5000 sqft",
      image: MithraVilla,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
        Featured Properties
      </h1>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-white"
          >
            {/* Image with gradient overlay */}
            <div className="relative h-60 sm:h-64 md:h-72">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Badge */}
              <span
                className={`absolute top-3 left-3 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-lg text-white ${
                  property.type === "Sell" ? "bg-blue-600" : "bg-green-500"
                }`}
              >
                {property.type}
              </span>

              {/* Heart Icon */}
              <FaHeart className="absolute top-3 right-3 text-xl sm:text-2xl text-white cursor-pointer hover:text-yellow-400 transition-colors duration-300" />
            </div>

            {/* Property Info */}
            <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-1 text-gray-900">
                {property.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-2">{property.location}</p>
              <p className="text-indigo-600 font-semibold text-lg sm:text-xl mb-4">
                {property.price}
              </p>

              {/* Details */}
              <div className="flex flex-wrap justify-between text-gray-600 text-sm sm:text-base font-medium">
                <div className="flex items-center space-x-1 mb-2 sm:mb-0">
                  <FaBed className="text-indigo-600" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center space-x-1 mb-2 sm:mb-0">
                  <FaBath className="text-indigo-600" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaRulerCombined className="text-indigo-600" />
                  <span>{property.area}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
