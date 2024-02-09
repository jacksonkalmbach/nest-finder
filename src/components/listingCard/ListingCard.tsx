import { useContext } from "react";
import { RootStoreContext } from "../../context/RootStoreContext";
import { observer } from "mobx-react";
import GridCard from "./GridCard";

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
   

    return (
      <div className="w-full">
        <div>
          <GridCard
            apt={apt}
            index={index}
          />
        </div>
      </div>
    );
  }
);

export default ListingCard;
