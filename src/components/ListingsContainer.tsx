import React, { useContext, useState, useEffect, useRef } from "react";
import ListingCard from "./listingCard/ListingCard";
import { observer } from "mobx-react";
import { RootStoreContext } from "../context/RootStoreContext";

const ListingsContainer = observer(() => {
  const { locationsSearchStore } = useContext(RootStoreContext);
  const [aptData, setAptData] = useState<any | null>(null);

  const listingRefs = useRef<{
    [zpid: string]: React.RefObject<HTMLDivElement>;
  }>({});

  useEffect(() => {
    setAptData(locationsSearchStore.listingsData.props);
    if (locationsSearchStore.listingsData.props) {
      locationsSearchStore.listingsData.props.forEach((apt: any) => {
        listingRefs.current[apt.zpid] = React.createRef();
      });
    }
  }, [locationsSearchStore.listingsData.props]);

  useEffect(() => {
    if (locationsSearchStore.selectedListing) {
      const selectedRef =
        listingRefs.current[locationsSearchStore.selectedListing];
      if (selectedRef?.current) {
        selectedRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [locationsSearchStore.selectedListing]);

  return (
    <div className="w-full bg-bg-light flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-2">
      {aptData &&
        aptData.map((apt: any, index: number) => (
          <div ref={listingRefs.current[apt.zpid]} key={apt.zpid}>
            <ListingCard
              apt={apt}
              index={index}
              onSelected={() =>
                locationsSearchStore.setSelectedListing(apt.zpid)
              }
            />
          </div>
        ))}
    </div>
  );
});

export default ListingsContainer;
