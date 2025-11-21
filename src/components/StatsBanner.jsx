import React from "react";

const stats = [
  { value: "99%", label: "Happy Customers" },
  { value: "780K", label: "Property Sales" },
  { value: "160+", label: "Award Winning" },
];

const StatsBanner = () => {
  return (
    <div className="bg-blue-400 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="mb-8 md:mb-0">
            <h1 className="text-4xl font-bold">{stat.value}</h1>
            <p className="text-lg mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
