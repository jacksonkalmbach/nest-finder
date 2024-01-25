import { useState } from "react";

const ToggleSaleRent = () => {
  const [selected, setSelected] = useState<string>("For Rent");

  return (
    <div className="flex bg-secondary-dark-blue py-4 px-4 rounded-xl gap-2 w-full items-center justify-around">
      <p
        className={`${
          selected === "For Rent" ? "bg-bg-light text-black" : ""
        } py-2 px-3 rounded-xl cursor-pointer active:scale-90 transition-all duration-150`}
        onClick={() => setSelected("For Rent")}
      >
        For Rent
      </p>
      <p
        className={`${
          selected === "For Sale" ? "bg-bg-light text-black" : ""
        } py-2 px-3 rounded-xl cursor-pointer active:scale-90 transition-all duration-150`}
        onClick={() => setSelected("For Sale")}
      >
        For Sale
      </p>
    </div>
  );
};

export default ToggleSaleRent;
