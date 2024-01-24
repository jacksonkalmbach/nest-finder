import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="w-screen flex flex-col grow font-poppins">
      <Hero />
      <div className="w-full flex flex-col p-12">
        <h2 className="text-3xl text-center md:text-4xl font-medium">Featured Listings</h2>
      </div>
    </div>
  );
};

export default HomePage;
