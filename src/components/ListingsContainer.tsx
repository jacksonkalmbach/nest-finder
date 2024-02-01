import { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

const ListingsContainer = ({ data }: { data: any }) => {
  const [selectedListing, setSelectedListing] = useState<number>();
  const handleSelectListing = (zpid: number) => {
    setSelectedListing(zpid);
  };
  useEffect(() => {
    console.log(selectedListing);
  }, [selectedListing]);

  return (
    <div className="w-full bg-bg-light flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-2">
      {data.map((apt: any, index: number) => {
        const { property } = apt;
        return (
          <ListingCard
            key={property.zpid}
            apt={property}
            index={index}
            onSelected={handleSelectListing}
          />
        );
      })}
    </div>
  );
};

export default ListingsContainer;
