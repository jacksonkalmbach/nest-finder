import React from "react";
import AvailableListing from "./AvailableListing";

const PricingAndFloorPlans = () => {
  return (
    <div className="flex flex-col gap-2">
      <AvailableListing />
      <AvailableListing />
      <AvailableListing />
    </div>
  );
};

export default PricingAndFloorPlans;
