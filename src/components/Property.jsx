import React from "react";
import { FaStar, FaHandshake, FaComments } from "react-icons/fa";
import propertyImg from "../assets/hero-image2.jpg"; // relative path

const Property = () => {
  const items = [
    {
      id: 1,
      icon: <FaStar className="text-blue-600 text-3xl" />,
      title: "Great Experience",
      description:
        "We provide outstanding service with years of experience in the real estate industry.",
    },
    {
      id: 2,
      icon: <FaHandshake className="text-blue-600 text-3xl" />,
      title: "Trusted Deals",
      description:
        "All our deals are verified and transparent, ensuring peace of mind for every client.",
    },
    {
      id: 3,
      icon: <FaComments className="text-blue-600 text-3xl" />,
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to answer your questions and assist you.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Why People Choose Property
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Image on left (mobile: top) */}
          <div className=" hidden  md:block md:col-span-1">
            <img
              src={propertyImg}
              alt="Property"
              className="w-full h-72 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Items on right */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-5 p-4 sm:p-6 rounded-xl hover:bg-blue-50 transition-shadow duration-300 shadow-sm hover:shadow-md"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-md flex-shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
