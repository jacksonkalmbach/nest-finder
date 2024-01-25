import React from "react";

const AvailableListing = () => {
  return (
    <div className="flex justify-between border p-4 rounded-xl font-poppins">
      <div className="flex flex-col">
        <p className="font-medium text-xl">S1</p>
        <p className="font-medium text-xl">$1,750</p>
        <p className="font-base text-lg">Studio, 1 Bath, 415 SF</p>
      </div>
      <p className="font-base text-base md:text-lg text-right">Now</p>
    </div>
  );
};

export default AvailableListing;
