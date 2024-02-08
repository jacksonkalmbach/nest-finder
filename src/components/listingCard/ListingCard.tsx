import { useContext } from "react";
import { RootStoreContext } from "../../context/RootStoreContext";
import { observer } from "mobx-react";
import GridCard from "./GridCard";
import QueueCard from "./QueueCard";

const ListingCard = observer(
  ({
    apt,
    index,
    onSelected,
  }: {
    apt: any;
    index: number;
    onSelected: (zpid: string) => void;
  }) => {
    const { uiStore } = useContext(RootStoreContext);
    const { locationsSearchStore } = useContext(RootStoreContext);
    const selectedListing = locationsSearchStore.selectedListing;
    console.log(selectedListing);
    console.log(apt);
    return (
      <>
        {uiStore.listingView === "grid" ? (
          <div>
            <GridCard
              apt={apt}
              index={index}
              isSelected={apt.zpid === selectedListing}
            />
          </div>
        ) : (
          <div className="col-span-2">
            <QueueCard
              apt={apt}
              index={index}
              isSelected={apt.zpid === selectedListing}
            />
          </div>
        )}
      </>
    );
  }
);

export default ListingCard;
