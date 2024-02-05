import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

interface Props {
  title: string;
  listItems: string[];
  setValue?: (value: string) => void;
}

type HomeTypeValue = "Houses" | "Townhomes" | "Apartments_Condos_Co-ops";
type HomeTypesKey = {
  "Single Family Homes": HomeTypeValue;
  Townhomes: HomeTypeValue;
  "Condos/Co-ops/Apartments": HomeTypeValue;
};

const homeTypesKey: HomeTypesKey = {
  "Single Family Homes": "Houses",
  Townhomes: "Townhomes",
  "Condos/Co-ops/Apartments": "Apartments_Condos_Co-ops",
};

const DropdownList = ({ title, listItems, setValue }: Props) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [listedItems, setListedItems] = useState<string[]>(listItems);
  const [showList, setShowList] = useState<boolean>(false);

  const handleItemClick = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems((prev) => [...prev, item]);
      setListedItems((prev) => prev.filter((listItem) => listItem !== item));
    }
  };

  useEffect(() => {
    setValue &&
      setValue(
        selectedItems
          .map((item) => homeTypesKey[item as keyof HomeTypesKey])
          .join(", ")
      );
  }, [selectedItems]);

  const handleRemoveItem = (itemToRemove: string) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
    setListedItems((prev) => [...prev, itemToRemove].sort());
  };

  return (
    <div className="flex flex-col bg-secondary-dark-blue w-full p-4 rounded-xl">
      <div
        className="flex w-full justify-between cursor-pointer"
        onClick={() => setShowList(!showList)}
      >
        <p>{title}</p>
        <ChevronDownIcon
          className={`${
            showList ? "rotate-180" : ""
          } w-6 h-6 transform duration-150 ease-in-out`}
        />
      </div>
      <div className="flex flex-wrap gap-2 w-full">
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className="bg-bg-light text-dark-blue flex justify-between items-center gap-1 w-fit py-1 px-2 rounded-xl mt-2 cursor-pointer"
            onClick={() => handleRemoveItem(item)}
          >
            <p className="text-[10px]">{item}</p>
            <Cross1Icon className="w-3 h-3" />
          </div>
        ))}
      </div>
      {showList && (
        <ul className="text-sm flex flex-col gap-2 mt-3">
          {listedItems.map((item, index) => (
            <li
              key={index}
              className="hover:underline cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              {item} {/* Display original key */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
