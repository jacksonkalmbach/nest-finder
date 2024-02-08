import { useState } from "react";
import InputField from "./ui/InputField";
import ToggleSaleRent from "./sidebar/components/ToggleSaleRent";
import { BedBathFilter } from "./sidebar/components/BedBathFilter";
import DropdownList from "./ui/DropdownList";

const filterOptions: string[] = [
  "For Rent",
  "Price",
  "Beds",
  "Baths",
  "Home Type",
];

interface FilterInputs {
  [key: string]: JSX.Element | undefined;
}

const homeTypes: string[] = [
  "Single Family Homes",
  "Townhomes",
  "Condos/Co-ops/Apartments",
];

const filterInputs: FilterInputs = {
  "For Rent": (
    <div className="flex justify-around items-center">
      <ToggleSaleRent setValue={(value) => console.log(value)} />
    </div>
  ),
  Price: (
    <div className="flex items-center gap-2">
      <InputField placeholder="Min" textAligned="center" variant="outlined" />
      <p>-</p>
      <InputField placeholder="Min" textAligned="center" variant="outlined" />
    </div>
  ),
  Beds: (
    <BedBathFilter
      setMinValue={(value) => console.log(value)}
      setMaxValue={(value) => console.log(value)}
    />
  ),
  Baths: (
    <BedBathFilter
      setMinValue={(value) => console.log(value)}
      setMaxValue={(value) => console.log(value)}
    />
  ),
  "Home Type": <DropdownList listItems={homeTypes} isDefaultOpen={true} />,
};

const MobileFilters = () => {
  const [filter, setFilter] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleClick = (option: string) => {
    setFilter(option);
    if (filter === option) {
      setShowFilter(false);
      setFilter("");
    } else {
      setFilter(option);
      setShowFilter(true);
    }
  };

  return (
    <div className="relative flex flex-col">
      <div className="md:hidden w-full flex flex-row p-2 gap-2 overflow-auto border">
        {filterOptions.map((option: string, index: number) => (
          <div
            key={index}
            className={`${
              filter === option
                ? "bg-accent-blue text-white font-medium"
                : "border"
            } px-2 rounded-full h-fit flex no-wrap min-w-fit`}
            onClick={() => handleClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      {showFilter && (
        <div className="absolute w-full p-3 top-full bg-white z-50">
          {filterInputs[filter]}
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
