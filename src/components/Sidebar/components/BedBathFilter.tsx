import { useEffect, useState } from "react";
import NumberOption from "./NumberOption";

interface Props {
  title?: string;
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
    if (numsSelected.length === 0) {
      setMinValue(null);
      setMaxValue(null);
    } else {
      setMinValue(Math.min(...numsSelected));
      setMaxValue(Math.max(...numsSelected));
    }
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
    <div className="flex flex-col md:bg-secondary-dark-blue md:p-4 w-full rounded-xl">
      {title && <p className="text-center">{title}</p>}
      <div className="flex w-full justify-evenly items-center md:mt-2">
        {values}
      </div>
    </div>
  );
};
