import ListingCard from "./ListingCard";
import { APARTMENTS_DATA } from "../DATA";

const ListingsContainer = ({ data }: { data: any }) => {
  return (
    <div className="w-full bg-bg-light flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-2">
      {data.map((apt: any, index: number) => {
        const { property } = apt;
        return <ListingCard key={property.zpid} apt={property} index={index} />;
      })}
    </div>
  );
};

export default ListingsContainer;
