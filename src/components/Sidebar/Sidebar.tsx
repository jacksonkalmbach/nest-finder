import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { MinusIcon } from "@heroicons/react/24/solid";
import { BedBathFilter } from "./components/BedBathFilter";
import ToggleSaleRent from "./components/ToggleSaleRent";
import DropdownList from "../ui/DropdownList";

interface Props {
  handleSearchParams: (key: string, value: string | number | null) => void;
}

const homeTypes: string[] = [
  "Single Family Homes",
  "Townhomes",
  "Condos/Co-ops/Apartments",
];

const Sidebar = ({ handleSearchParams }: Props) => {
  const defaultCity = localStorage.getItem("searchCity");
  const searchCity = defaultCity ? defaultCity : "";

  const handleSetParam = (key: string, value: string | number | null) => {
    handleSearchParams(key, value);
    console.log("SETTING PARAM", key, value);
  };

  return (
    <div className="hidden min-w-[300px] max-w-[300px] bg-dark-blue text-white p-6 xl:flex flex-col items-start gap-5 overflow-y-auto">
      <InputField
        variant="secondary"
        iconVariant="search"
        defaultValue={searchCity}
        placeholder="Search"
        setValue={(value) => handleSetParam("location", value)}
      />
      <ToggleSaleRent
        setValue={(value) => handleSetParam("statusType", value)}
      />
      <div className="flex flex-col w-full bg-secondary-dark-blue py-4 px-4 rounded-xl gap-2">
        <p className="text-center">Price Range</p>
        <div className="flex w-full justify-between items-center gap-3">
          <InputField
            variant="tertiary"
            textAligned="center"
            placeholder="Min"
            setValue={(value) => handleSetParam("rentMinPrice", Number(value))}
          />
          <MinusIcon className="w-10 h-10" />
          <InputField
            variant="tertiary"
            textAligned="center"
            placeholder="Max"
            setValue={(value) => handleSetParam("rentMaxPrice", Number(value))}
          />
        </div>
      </div>
      <BedBathFilter
        title="Bedrooms"
        setMinValue={(value) => handleSetParam("bedsMin", Number(value))}
        setMaxValue={(value) => handleSetParam("bedsMax", Number(value))}
      />
      <BedBathFilter
        title="Bathrooms"
        setMinValue={(value) => handleSetParam("bathsMin", Number(value))}
        setMaxValue={(value) => handleSetParam("bathsMax", Number(value))}
      />
      <DropdownList
        title="Home Type"
        listItems={homeTypes}
        setValue={(value) => handleSetParam("homeType", value)}
      />
      <Button text="Search" variant="primary" onClick={() => {}} />
    </div>
  );
};

export default Sidebar;
