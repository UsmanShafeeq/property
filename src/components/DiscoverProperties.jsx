import React from "react";
import { FaBuilding, FaHome, FaWarehouse, FaStore, FaBriefcase } from "react-icons/fa";

const DiscoverProperties = () => {
  const categories = [
    { id: 1, title: "Apartment", count: 3, icon: <FaBuilding /> },
    { id: 2, title: "Villa", count: 3, icon: <FaHome /> },
    { id: 3, title: "Office", count: 3, icon: <FaBriefcase /> },
    { id: 4, title: "Shop", count: 3, icon: <FaStore /> },
    { id: 5, title: "House", count: 3, icon: <FaHome /> },
    { id: 6, title: "Warehouse", count: 3, icon: <FaWarehouse /> },
  ];

  return (
    <section className="py-10 bg-gray-50">
      {/* Section Title */}
      <div className="mb-8">
        <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900">
          Discover Properties
        </h1>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 px-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 sm:p-6 hover:scale-105"
          >
            {/* Icon */}
            <div className="text-indigo-600 text-5xl sm:text-6xl md:text-7xl mb-4">
              {cat.icon}
            </div>

            {/* Category Info */}
            <h2 className="font-semibold text-lg sm:text-xl md:text-lg mb-1 text-center text-gray-900">
              {cat.title}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base text-center">
              {cat.count} Properties
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverProperties;
