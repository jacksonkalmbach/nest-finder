import React from "react";
import Hero from "../components/Hero";
import ListingCard from "../components/ListingCard";
import { APARTMENTS_DATA } from "../DATA";
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <div className="w-screen min-h-screen flex-col grow font-poppins">
      <Hero />
      <div className="w-full flex flex-col p-12 justify-center items-center gap-6">
        <h2 className="text-3xl text-center md:text-4xl font-medium">
          Featured Listings
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 w-full md:justify-around lg:flex-row">
          <div className="w-[350px] h-[400px] border rounded-xl hover:scale-105 transition duration-150 ease-in cursor-pointer"></div>
          <div className="w-[350px] h-[400px] border rounded-xl hover:scale-105 transition duration-150 ease-in cursor-pointer"></div>
          <div className="w-[350px] h-[400px] border rounded-xl hover:scale-105 transition duration-150 ease-in cursor-pointer"></div>
        </div>
        <div className="w-full flex justify-center items-center md:w-[200px]">
          <Button
            text="View More"
            variant="primary"
            onClick={() => console.log("View more")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
