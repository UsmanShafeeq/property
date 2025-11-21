import React from "react";

const PropertyHistory = () => {
  return (
    <section className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-stretch">
        {/* Large box */}
        <div className="lg:w-2/3 bg-white p-10 border border-gray-200 flex flex-col justify-between">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Property History: How We Became Number One
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing. Various versions have evolved over the years, sometimes by accident, sometimes as necessary, making release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <button className="self-start bg-indigo-600 text-white py-3 px-8 font-medium hover:bg-indigo-700">
            More Details
          </button>
        </div>

        {/* Small gray box */}
        <div className="lg:w-1/3 w-full h-auto lg:h-auto bg-gray-300 border border-gray-200"></div>
      </div>
    </section>
  );
};

export default PropertyHistory;
