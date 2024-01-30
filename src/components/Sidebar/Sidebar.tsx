import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { BedBathFilter } from "./components/BedBathFilter";
import ToggleSaleRent from "./components/ToggleSaleRent";

interface Props {
  handleSearchParams: () => void;
}

const Sidebar = ({ handleSearchParams }: Props) => {
  
  return (
    <div className="hidden w-[300px] bg-dark-blue text-white p-6 xl:flex flex-col items-start gap-5">
      <InputField variant="secondary" />
      <ToggleSaleRent />
      <div className="flex flex-col w-full bg-secondary-dark-blue py-4 px-4 rounded-xl gap-2">
        <p className="text-center">Price</p>
        <div className="flex w-full justify-between items-center">
          <input
            placeholder="Min Rent"
            className="w-[100px] rounded-lg p-1 bg-bg-light text-center text-dark-blue"
          />
          <p>-</p>
          <input
            placeholder="Max Rent"
            className="w-[100px] rounded-lg p-1 bg-bg-light text-center text-dark-blue"
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
