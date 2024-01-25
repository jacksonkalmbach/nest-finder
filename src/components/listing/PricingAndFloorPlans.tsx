import React from "react";

const PricingAndFloorPlans = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 md:p-6">
      <h2 className="text-2xl font-medium mb-4">Pricing & Floor Plans</h2>
      <div className="border p-4 rounded-xl">
        <p className="font-medium text-xl">S1</p>
        <p className="font-medium text-xl">$1,750</p>
        <p className="font-base text-lg">Studio, 1 Bath, 415 SF</p>
        <p className="font-base text-lg">Available Now</p>
      </div>
    </div>
  );
};

export default PricingAndFloorPlans;
