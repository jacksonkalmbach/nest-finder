import { useContext, useState, useEffect } from "react";
import ListingCard from "./listingCard/ListingCard";
import { observer } from "mobx-react";
import { RootStoreContext } from "../context/RootStoreContext";

const ListingsContainer = observer(() => {
  const { locationsSearchStore } = useContext(RootStoreContext);
  const [aptData, setAptData] = useState<any>([]);

  useEffect(() => {
    console.log("new data");
    setAptData(locationsSearchStore.listingsData.props);
  }, [locationsSearchStore.listingsData.props]);

  console.log("listingcontainer.tsx", locationsSearchStore.listingsData);
  const [selectedListing, setSelectedListing] = useState<string>();

  const handleSelectListing = (zpid: string) => {
    setSelectedListing(zpid);
  };

  return (
    <div className="w-full bg-bg-light flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-2">
      {aptData.length &&
        aptData.map((apt: any, index: number) => {
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
});

export default ListingsContainer;
