import React from "react";
import AvailableListing from "./AvailableListing";

const PricingAndFloorPlans = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 md:p-6">
      <h2 className="text-2xl font-medium mb-4">Pricing & Floor Plans</h2>
      <div className="flex flex-col gap-2">
        <AvailableListing />
        <AvailableListing />
        <AvailableListing />
      </div>
    </div>
  );
};

export default PricingAndFloorPlans;
