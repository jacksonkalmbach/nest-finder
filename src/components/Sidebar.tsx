import React from "react";
import InputField from "./ui/InputField";
import SearchDropdown from "./SearchDropdown";

const Sidebar = () => {
  return (
    <div className="hidden max-w-[300px] bg-dark-blue grow text-white p-6 xl:flex flex-col items-start gap-5">
      <InputField variant="secondary" />
      <SearchDropdown />
      <div className="flex flex-col w-full bg-secondary-dark-blue py-4 px-4 rounded-xl gap-2">
        <p className="text-start">Price</p>
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
      <div className="flex flex-col bg-secondary-dark-blue p-4 w-full rounded-xl">
        <p>Beds</p>
        <div className="flex w-full justify-start gap-4 items-center text-gray-400 mt-2">
          <div className="bg-bg-light p-2 rounded-full">1</div>
          <div className="bg-bg-light p-2 rounded-full">2</div>
          <div className="bg-bg-light p-2 rounded-full">3</div>
          <div className="bg-bg-light p-2 rounded-full">4</div>
          <div className="bg-bg-light p-2 rounded-full">5+</div>
        </div>
      </div>
      <div className="flex flex-col bg-secondary-dark-blue w-full p-4 rounded-xl">
        <p>Home Type</p>
      </div>
    </div>
  );
};

export default Sidebar;
