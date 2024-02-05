import { useEffect, useState } from "react";
import NumberOption from "./NumberOption";

interface Props {
  title: string;
  setMinValue: (value: number | null) => void;
  setMaxValue: (value: number | null) => void;
}

export const BedBathFilter = ({ title, setMinValue, setMaxValue }: Props) => {
  const [numsSelected, setNumsSelected] = useState<number[]>([]);
  const values = [];

  const handleSelect = (val: number) => {
    if (numsSelected.includes(val)) {
      setNumsSelected(numsSelected.filter((item) => item !== val));
    } else {
      setNumsSelected((prev) => [...prev, val]);
    }
  };

  useEffect(() => {
    setMinValue(Math.min(...numsSelected));
    setMaxValue(Math.max(...numsSelected));
  }, [numsSelected]);

  for (let i = 1; i <= 5; i++) {
    values.push(
      <NumberOption
        value={i}
        numSelected={
          i <= Math.max(...numsSelected) && i >= Math.min(...numsSelected)
        }
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
