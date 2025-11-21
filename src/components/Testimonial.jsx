import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import boyImage from "../assets/boy.png";

const Testimonial = () => {
  return (
    <div className="py-12 bg-gray-50">
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
        
        {/* MAIN CIRCLE CONTAINER */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">

          {/* Big soft circle background */}
          <div className="absolute w-full h-full rounded-full bg-blue-50 shadow-lg"></div>

          {/* Inner circle */}
          <div className="absolute w-[55%] h-[55%] rounded-full bg-blue-100 flex items-center justify-center shadow-inner"></div>

          {/* Center image */}
          <img
            src={boyImage}
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover z-10 border-4 border-white shadow-md"
            alt="center"
          />

          {/* Around images */}
          <img
            src={boyImage}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover absolute -top-3 -left-4 border-2 border-white shadow"
            alt="img1"
          />
          <img
            src={boyImage}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover absolute -top-4 -right-4 border-2 border-white shadow"
            alt="img2"
          />
          <img
            src={boyImage}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover absolute bottom-4 -left-4 border-2 border-white shadow"
            alt="img3"
          />
          <img
            src={boyImage}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover absolute bottom-4 -right-4 border-2 border-white shadow"
            alt="img4"
          />
          <img
            src={boyImage}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover absolute bottom-1/3 left-1/2 transform -translate-x-1/2 border-2 border-white shadow"
            alt="img5"
          />
        </div>

        {/* TITLE AND QUOTE */}
        <div className="mt-6 md:mt-0 md:ml-10 max-w-md text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Testimonials
          </h2>
          <p className="mt-3 text-gray-600">
            <FaQuoteRight className="inline text-blue-600 mr-2" />
            "Our users love the experience! The team’s dedication and service are unmatched."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
