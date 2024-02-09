import { useContext, useState } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { DropdownMenu, Button } from "@radix-ui/themes";
import { fetchData } from "../utils/fetchData";
import { RootStoreContext } from "../context/RootStoreContext";

const url = process.env.REACT_APP_RAPID_API_URL + "propertyExtendedSearch";

const sortKey: Record<string, string> = {
  Price_High_Low: "Price (high to low)",
  Price_Low_High: "Price (low to high)",
  Default: "Sort By",
};

const SortBy = ({ params }: any) => {
  const { locationsSearchStore } = useContext(RootStoreContext);
  const [sortVal, setSortVal] = useState<string>("Sort By");

  const handleClick = (val: string) => {
    if (val !== "Default") {
      const fetchSortedData = async () => {
        const response = await fetchData(url, { ...params, sort: val });
        console.log("params", { ...params, sort: val });
        console.log(response.data);
        locationsSearchStore.setListingsData(response.data);
      };
      fetchSortedData();
    } else {
      const fetch = async () => {
        const response = await fetchData(url, params);
        locationsSearchStore.setListingsData(response.data);
      };
      fetch();
    }

    setSortVal(sortKey[val]);
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" color="gray">
          {sortVal}
          <CaretSortIcon width="12" height="12" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        variant="soft"
        color="gray"
        className="font-poppins"
      >
        <DropdownMenu.Item onClick={() => handleClick("Default")}>
          <p className="font-poppins cursor-pointer">Default</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => handleClick("Price_Low_High")}>
          <p className="font-poppins cursor-pointer">Rent (low to high)</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => handleClick("Price_High_Low")}>
          <p className="font-poppins cursor-pointer">Rent (high to low)</p>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default SortBy;
