import React from "react";
import InputField from "./ui/InputField";
import SearchDropdown from "./SearchDropdown";
import Button from "./ui/Button";
import { BedBathFilter } from "./Sidebar/BedBathFilter";

const Sidebar = () => {
  return (
    <div className="hidden max-w-[300px] bg-dark-blue grow text-white p-6 xl:flex flex-col items-start gap-5">
      <InputField variant="secondary" />
      {/* <SearchDropdown /> */}
      <div className="flex bg-secondary-dark-blue py-4 px-4 rounded-xl gap-2 w-full items-center justify-around">
        <p>For Rent</p>
        <p className="bg-bg-light py-2 px-3 rounded-xl text-black">For Sale</p>
      </div>
      <div className="flex flex-col w-full bg-secondary-dark-blue py-4 px-4 rounded-xl gap-2">
        <p className="text-center">Price</p>
        <div className="flex w-full justify-between items-center">
          <input
            placeholder="Min Rent"
            className="w-[100px] rounded-lg p-1 bg-bg-light"
          />
          <p>-</p>
          <input
            placeholder="Max Rent"
            className="w-[100px] rounded-lg p-1 bg-bg-light"
          />
        </div>
      </div>
      <BedBathFilter title="Bedrooms" />
      <BedBathFilter title="Bathrooms" />
      <div className="flex flex-col bg-secondary-dark-blue w-full p-4 rounded-xl">
        <p>Home Type</p>
      </div>
      <Button text="Search" variant="primary" onClick={() => {}} />
    </div>
  );
};

export default Sidebar;
