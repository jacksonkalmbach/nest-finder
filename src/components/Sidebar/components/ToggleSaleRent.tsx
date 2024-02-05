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
    <div className="flex bg-secondary-dark-blue py-4 px-4 rounded-xl gap-2 w-full items-center justify-around">
      <p
        className={`${
          selected === "ForRent" ? "bg-bg-light text-black" : ""
        } py-2 px-3 rounded-xl cursor-pointer active:scale-90 transition-all duration-150`}
        onClick={() => handleClick("ForRent")}
      >
        For Rent
      </p>
      <p
        className={`${
          selected === "ForSale" ? "bg-bg-light text-black" : ""
        } py-2 px-3 rounded-xl cursor-pointer active:scale-90 transition-all duration-150`}
        onClick={() => handleClick("ForSale")}
      >
        For Sale
      </p>
    </div>
  );
};

export default ToggleSaleRent;
