import ListingCard from "./ListingCard";
import { APARTMENTS_DATA } from "../DATA";

const ListingsContainer = () => {
  return (
    <div className="w-full bg-bg-light flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-2">
      {APARTMENTS_DATA.map((apt: any) => {
        return <ListingCard key={apt.id} apt={apt} />;
      })}
    </div>
  );
};

export default ListingsContainer;
