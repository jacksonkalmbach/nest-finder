import { useState } from "react";

const ToggleSaleRent = ({
  setValue,
}: {
  setValue: (value: string) => void;
}) => {
  const [selected, setSelected] = useState<string>("ForRent");

  const handleClick = (value: string) => {
    setSelected(value);
    setValue(value);
  };

  return (
    <div className="flex md:bg-secondary-dark-blue md:py-4 md:px-4 rounded-xl gap-2 w-full items-center justify-around">
      <p
        className={`${
          selected === "ForRent"
            ? "bg-accent-blue text-white font-medium md:bg-bg-light md:text-black"
            : "text-text-gray"
        } py-2 px-3 rounded-xl cursor-pointer active:scale-90 transition-all duration-150`}
        onClick={() => handleClick("ForRent")}
      >
        For Rent
      </p>
      <p
        className={`${
          selected === "ForSale"
            ? "bg-accent-blue text-white font-medium md:bg-bg-light md:text-black"
            : "text-text-gray"
        } py-2 px-3 rounded-xl cursor-pointer active:scale-90 transition-all duration-150`}
        onClick={() => handleClick("ForSale")}
      >
        For Sale
      </p>
    </div>
  );
};

export default ToggleSaleRent;
