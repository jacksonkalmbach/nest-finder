import { useContext } from "react";
import { RootStoreContext } from "../context/RootStoreContext";
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
    onSelected: (zpid: number) => void;
  }) => {
    const { uiStore } = useContext(RootStoreContext);

    return (
      <>
        {uiStore.listingView === "grid" ? (
          <div>
            <GridCard apt={apt} index={index} onSelected={onSelected} />
          </div>
        ) : (
          <div className="col-span-2">
            <QueueCard apt={apt} index={index} onSelected={onSelected} />
          </div>
        )}
      </>
    );
  }
);

export default ListingCard;
