import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

interface Props {
  title: string;
  listItems: string[];
}

const DropdownList = ({ title, listItems }: Props) => {
  const [selectedItem, setSelectedItems] = useState<string[]>([]);
  const [listedItems, setListedItems] = useState<string[]>(listItems);
  const [showList, setShowList] = useState<boolean>(false);

  const handleItemClick = (item: string) => {
    setSelectedItems((prev) => {
      if (!prev.includes(item)) {
        setListedItems((prevItems) =>
          prevItems.filter((listItem) => listItem !== item)
        );
        return [...prev, item];
      }
      return prev;
    });
  };
  
  useEffect(() => {
    if (listedItems.length === 0) {
      setShowList(false);
    }
  }, [listedItems]);

  const handleRemoveItem = (itemToRemove: string) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
    setListedItems((prev) => [...prev, itemToRemove]);
  };

  return (
    <div className="flex flex-col bg-secondary-dark-blue w-full p-4 rounded-xl">
      <div
        className="flex w-full justify-between cursor-pointer"
        onClick={() => {
          if (listedItems.length !== 0) {
            setShowList(!showList);
          }
        }}
      >
        <p>{title}</p>
        <ChevronDownIcon
          className={`${
            showList ? "rotate-180" : ""
          } w-6 h-6 transform duration-150 ease-in-out`}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        {selectedItem.map((item: string) => {
          return (
            <div
              className="bg-bg-light text-dark-blue flex justify-center items-center gap-1 w-fit py-1 px-2 rounded-xl mt-2 cursor-pointer"
              onClick={() => {
                handleRemoveItem(item);
              }}
            >
              <p className="text-[10px]">{item}</p>
              <Cross1Icon className="w-3 h-3" />
            </div>
          );
        })}
      </div>
      {showList && (
        <ul className="text-sm flex flex-col gap-2 mt-3">
          {listedItems.map((item: string) => {
            return (
              <li
                className="hover:underline cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
