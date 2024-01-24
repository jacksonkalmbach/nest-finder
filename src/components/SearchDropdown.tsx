import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const options = ["For Rent", "For Sale"];

const SearchDropdown = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("For Rent");

  const handleSelected = (option: string) => {
    setSelected(option);
    setShowOptions(false);
  };

  return (
    <div className="w-full bg-secondary-dark-blue rounded-xl p-4 flex flex-col justify-between items-center">
      <div
        className="flex w-full justify-between items-center cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p>{selected}</p>
        <ChevronDownIcon
          className={`${
            showOptions ? "rotate-180" : ""
          } "w-5 h-5 transition-all duration-200"`}
        />
      </div>
      {showOptions && (
        <div className="flex flex-col w-full mt-2 gap-1">
          {options.map((option: string) => {
            return (
              <p
                onClick={() => handleSelected(option)}
                className={`${
                  selected === option
                    ? "bg-gray-500 rounded-full"
                    : "hover:text-accent-blue"
                } w-full px-2 cursor-pointer`}
              >
                {option}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
