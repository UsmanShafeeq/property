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
import Footer from "./components/Footer";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
