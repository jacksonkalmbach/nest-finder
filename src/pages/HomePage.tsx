import React from "react";
import Hero from "../components/Hero";
import ListingCard from "../components/ListingCard";
import { APARTMENTS_DATA } from "../DATA";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import FeaturedListing from "../components/FeaturedListing";

const listings = [1, 2, 3, 4];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen flex-col grow font-poppins">
      <Hero />
      <div className="w-full flex flex-col p-12 justify-center items-center gap-6">
        <h2 className="text-3xl text-center md:text-4xl font-medium">
          Featured Listings in Chicago, IL
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 w-full md:justify-around lg:flex-row">
          {listings.map((list: number) => {
            return <FeaturedListing listing={list}/>;
          })}
        </div>
        <div className="w-full flex justify-center items-center md:w-[200px]">
          <Button
            text="View More"
            variant="primary"
            onClick={() => navigate("/discover")}
          />
        </div>
      </div>
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default HomePage;
