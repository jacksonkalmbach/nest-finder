import { useContext } from "react";
import { RootStoreContext } from "../context/RootStoreContext";
import { observer } from "mobx-react";
import GridCard from "./GridCard";
import QueueCard from "./QueueCard";

const ListingCard = observer(({ apt, index }: { apt: any; index: number }) => {
  const { uiStore } = useContext(RootStoreContext);

  return (
    <div className="w-full">
      {uiStore.listingView === "grid" ? (
        <GridCard apt={apt} index={index} />
      ) : (
        <QueueCard apt={apt} index={index} />
      )}
    </div>
  );
});

export default ListingCard;
