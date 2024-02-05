import { useState, useEffect } from "react";
import ListingCard from "./listingCard/ListingCard";

const ListingsContainer = ({ data }: { data: any }) => {
  const [selectedListing, setSelectedListing] = useState<string>();
  const handleSelectListing = (zpid: string) => {
    setSelectedListing(zpid);
  };


  return (
    <div className="w-full bg-bg-light flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-2">
      {data.map((apt: any, index: number) => {
        return (
          <ListingCard
            key={apt.zpid}
            apt={apt}
            index={index}
            onSelected={handleSelectListing}
          />
        );
      })}
    </div>
  );
};

export default ListingsContainer;
