import { useContext, useState } from "react";
import InputField from "./ui/InputField";
import ToggleSaleRent from "./Sidebar/components/ToggleSaleRent";
import { BedBathFilter } from "./Sidebar/components/BedBathFilter";
import DropdownList from "./ui/DropdownList";
import { RootStoreContext } from "../context/RootStoreContext";

const filterOptions: string[] = [
  "status_type",
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
  status_type: (
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
  const { locationsSearchStore } = useContext(RootStoreContext);
  console.log(locationsSearchStore.searchParams);
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

  const statusType: Record<string, string> = {
    ForRent: "For Rent",
    ForSale: "For Sale",
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
            {option === "status_type"
              ? statusType[locationsSearchStore.searchParams.status_type]
              : option}
          </div>
        ))}
      </div>
      {showFilter && (
        <div className="absolute w-full p-3 top-full bg-white z-20">
          {filterInputs[filter]}
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
