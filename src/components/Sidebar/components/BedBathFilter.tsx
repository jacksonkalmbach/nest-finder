import { useState } from "react";
import NumberOption from "./NumberOption";

export const BedBathFilter = ({ title }: { title: string }) => {
  const [numSelected, setNumSelected] = useState<number>(0);
  const values = [];

  const handleSelect = (val: number) => {
    setNumSelected(val);
  };

  for (let i = 1; i <= 5; i++) {
    values.push(
      <NumberOption
        value={i}
        numSelected={numSelected}
        handleSelect={handleSelect}
      />
    );
  }

  return (
    <div className="flex flex-col bg-secondary-dark-blue p-4 w-full rounded-xl">
      <p className="text-center">{title}</p>
      <div className="flex w-full justify-evenly items-center mt-2">
        {values}
      </div>
    </div>
  );
};
