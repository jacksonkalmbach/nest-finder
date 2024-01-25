import React from "react";
import { SAMPLE_IMAGES } from "../DATA";
import { Separator } from "@radix-ui/themes";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import PricingAndFloorPlans from "../components/listing/PricingAndFloorPlans";
import BuildingOverview from "../components/listing/BuildingOverview";
import Button from "../components/ui/Button";

const ListingPage = () => {
  return (
    <div className="w-screen bg-bg-light flex flex-col font-poppins">
      <div className="h-[250px] grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 md:flex-nowrap overflow-auto gap-1 md:h-1/2">
        {SAMPLE_IMAGES.map((img, index) => {
          return index === 0 ? (
            <div className="w-auto h-full md:row-span-2 md:col-span-2">
              <img src={img.link} alt="listing" className="w-full h-full" />
            </div>
          ) : (
            <div className="w-full md:row-span-1 md:col-span-1">
              <img src={img.link} alt="listing" className="w-full h-full" />
            </div>
          );
        })}
      </div>
      <div className="flex items-start gap-8 p-6 lg:py-10 lg:px-20">
        <div className="flex flex-col gap-6 w-full lg:w-3/4">
          <div className="flex flex-col p-4 md:p-6 justify-start w-full items-start font-poppins col-span-2 bg-white rounded-xl gap-2 md:gap-6">
            <div className="w-full justify-center lg:justify-between flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex flex-col items-start w-full">
                <div className="flex justify-between items-center w-full">
                  <h1 className="font-medium text-2xl md:text-3xl">
                    1441 N. Elk Grove
                  </h1>
                  <div className="w-6 h-6 md:w-8 md:h-8">
                    <HeartIcon className="w-full h-auto text-accent-blue" />
                  </div>
                  <img
                    src="https://images1.apartments.com/i2/mbkz4OaDkHbUzRWhfXWaXVhrA_QS21qtrSHbN33ULos/110/image.jpg"
                    alt=""
                    className="h-10 md:h-[80px]"
                  />
                </div>
                <p className="text-sm md:text-base">Chicago, IL 60622</p>
              </div>
            </div>
            <div className="flex w-full text-center justify-around p-2 bg-bg-light rounded-xl text-sm md:text-base">
              <div className="flex flex-col justify-center items-center md:text-base">
                <p>Monthly Rent</p>
                <p className="font-medium">$1,895 - $14,145</p>
              </div>
              <Separator orientation="vertical" size={"4"} color="gray" />
              <div className="flex flex-col justify-center items-center">
                <p className="hidden md:block">Bedrooms</p>
                <p className="md:hidden">Beds</p>
                <p className="font-medium">Studio - 3 Bd</p>
              </div>
              <Separator orientation="vertical" size={"4"} />
              <div className="flex flex-col justify-center items-center">
                <p className="hidden md:block">Bathrooms</p>
                <p className="md:hidden">Bath</p>
                <p className="font-medium">1 - 2.5 ba</p>
              </div>
              <Separator
                orientation="vertical"
                size={"4"}
                className="hidden md:block"
              />
              <div className="hidden md:flex flex-col">
                <p>Square Feet</p>
                <p className="font-medium">464 - 2,616 sqft</p>
              </div>
            </div>
            <p>
              The lushly landscaped Briarwood Apartments in Sunnyvale, CA lets
              you live.
            </p>
          </div>
          <PricingAndFloorPlans />
          <BuildingOverview />
        </div>
        <div className="hidden lg:flex flex-col justify-center items-center bg-white grow p-6 rounded-xl gap-4 sticky top-20">
          <h3 className="text-xl text-center font-medium">
            Contact This Property
          </h3>
          <p>Company Name</p>
          <div className="hidden md:flex gap-2 text-accent-blue font-medium items-center">
            <PhoneIcon className="h-4 w-4" />
            <p>(123) 425-5293</p>
          </div>
          <Button text="Send Message" variant="primary" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
