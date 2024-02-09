import React, { useContext, useState, useEffect, useRef } from "react";
import ListingCard from "./listingCard/ListingCard";
import { observer } from "mobx-react";
import { RootStoreContext } from "../context/RootStoreContext";

const ListingsContainer = observer(() => {
  const { locationsSearchStore } = useContext(RootStoreContext);
  const [aptData, setAptData] = useState<any | null>(null);

  const listingRefs = useRef<{
    [id: string]: React.RefObject<HTMLDivElement>;
  }>({});

  useEffect(() => {
    setAptData(locationsSearchStore.listingsData.props);
    if (locationsSearchStore.listingsData.props) {
      locationsSearchStore.listingsData.props.forEach((apt: any) => {
        const id = apt.isBuilding ? apt.lotId.toString() : apt.zpid.toString();
        return (listingRefs.current[id] = React.createRef());
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
    <div className="w-full bg-bg-light flex flex-col lg:grid grid-cols-2 gap-2">
      {aptData &&
        aptData.map((apt: any, index: number) => {
          const id = apt.isBuilding
            ? apt.lotId.toString()
            : apt.zpid.toString();
          return (
            <div ref={listingRefs.current[id]} key={id}>
              <ListingCard
                apt={apt}
                index={index}
                onSelected={() => locationsSearchStore.setSelectedListing(id)}
              />
            </div>
          );
        })}
    </div>
  );
});

export default ListingsContainer;
