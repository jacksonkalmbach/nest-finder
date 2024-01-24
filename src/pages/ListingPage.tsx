import React from "react";
import { useParams } from "react-router-dom";
import { SAMPLE_IMAGES } from "../DATA";
import { Separator } from "@radix-ui/themes";
import { PhoneIcon } from "@heroicons/react/24/solid";

const ListingPage = () => {
  const params = useParams();

  return (
    <div className="w-screen bg-bg-light min-h-screen flex flex-col">
      <div className="grid grid-cols-4 grid-rows-2 flex-nowrap overflow-x-auto gap-1 h-1/2">
        {SAMPLE_IMAGES.map((img, index) => {
          return index === 0 ? (
            <div className="row-span-2 col-span-2">
              <img src={img.link} alt="listing" className="w-full h-full" />
            </div>
          ) : (
            <div className="row-span-1 col-span-1">
              <img src={img.link} alt="listing" className="w-full h-full" />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-6 py-10 px-20">
        <div className="flex flex-col p-6 justify-start w-full items-start font-poppins col-span-2 bg-white rounded-xl gap-6">
          <div className="w-full justify-between flex items-center">
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-medium text-3xl">1441 N. Elk Grove</h1>
              <p>Chicago, IL 60622</p>
            </div>
            <div className="flex flex-col justify-center">
              <img
                src="https://images1.apartments.com/i2/mbkz4OaDkHbUzRWhfXWaXVhrA_QS21qtrSHbN33ULos/110/image.jpg"
                alt=""
                className="h-12 w-auto"
              />
              <div className="flex gap-2 text-accent-blue font-medium items-center">
                <PhoneIcon className="h-4 w-4" />
                <p>(123) 425-5293</p>
              </div>
            </div>
          </div>
          <div className="flex w-3/4 justify-around p-2 bg-bg-light rounded-xl">
            <div className="flex flex-col ">
              <p>Monthly Rent</p>
              <p className="font-medium">$1,895 - $14,145</p>
            </div>
            <Separator orientation="vertical" size={"4"} color="gray" />
            <div className="flex flex-col">
              <p>Bedrooms</p>
              <p className="font-medium">Studio - 3 Bd</p>
            </div>
            <Separator orientation="vertical" size={"4"} />
            <div className="flex flex-col">
              <p>Bathrooms</p>
              <p className="font-medium">1 - 2.5 ba</p>
            </div>
            <Separator orientation="vertical" size={"4"} />
            <div className="flex flex-col">
              <p>Square Feet</p>
              <p className="font-medium">464 - 2,616 sqft</p>
            </div>
          </div>
          <p>
            The lushly landscaped Briarwood Apartments in Sunnyvale, CA lets you
            live.
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-xl">
          <p className="text-2xl font-medium">Pricing & Floor Plans</p>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
