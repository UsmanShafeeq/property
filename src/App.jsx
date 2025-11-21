import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiscoverProperties from "./components/DiscoverProperties";
import FeaturedProperties from "./components/FeaturedProperties";
import SavingsCalculator from "./components/SavingsCalculator";
import Property from "./components/Property";
import PropertyHistory from "./components/PropertyHistory";
import ContactCard from "./components/ContactCard";
import Testimonial from "./components/Testimonial";
import StatsBanner from "./components/StatsBanner";
import BlogPostCard from "./components/BlogPostCard";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <DiscoverProperties />
        <FeaturedProperties />
        <SavingsCalculator />
        <Property />
        <PropertyHistory />
        <Testimonial />
        <StatsBanner />
        <BlogPostCard />
      </div>
    </>
  );
}

export default App;
