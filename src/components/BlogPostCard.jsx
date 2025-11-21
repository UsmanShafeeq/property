import React from "react";
import image from "../assets/hero-image2.jpg"; // example image

const BlogPostCard = () => {
  const posts = [
    {
      date: "Nov 08, 2025",
      title: "Exploring Luxury Real Estate Markets",
      image: image,
    },
    {
      date: "Nov 08, 2025",
      title: "A Guide to Buying Real Estate in Metropolitan",
      image: image,
    },
  ];

  return (
    <div className="px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Blog Post
      </h1>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-5">
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-40 h-32 object-cover rounded-xl shadow-md"
            />

            {/* Text Content */}
            <div>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mt-1 mb-3">
                {post.title}
              </h3>

              <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostCard;
