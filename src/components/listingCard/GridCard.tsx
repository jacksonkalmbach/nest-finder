import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Separator } from "@radix-ui/themes";
import { observer } from "mobx-react";
import { useContext } from "react";
import { RootStoreContext } from "../../context/RootStoreContext";
import DisplayPrice from "./components/DisplayPrice";
import DisplayBdBaSf from "./components/DisplayBdBaSf";
import DisplayImg from "./components/DisplayImg";

const GridCard = observer(({ apt, index }: { apt: any; index: number }) => {
  const {
    zpid,
    address,
    bedrooms,
    bathrooms,
    price,
    units,
    lotId,
    isBuilding,
  } = apt;
  const linkId = lotId ? `lotId/${lotId}` : `zpid/${zpid}`;
  const displayName = apt.buildingName ? apt.buildingName : apt.address;
  const { uiStore, locationsSearchStore } = useContext(RootStoreContext);
  const id = isBuilding ? lotId.toString() : zpid.toString();
  const isSelected = locationsSearchStore.selectedListing === id;

  const handleClick = () => {
    locationsSearchStore.setSelectedListing(id);
  };

  const variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const animationDuration =
    index === 0 ? 0.5 : index < 4 ? 0.5 + index * 0.4 : 0;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        ease: "easeInOut",
        duration: animationDuration,
      }}
      className={`${
        isSelected && "md:border-2 md:border-accent-blue"
      } bg-white row-span-1 col-span-1 rounded-xl border h-full flex flex-col p-4 justify-between min-h-[350px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="h-[150px] bg-gray-300 rounded-xl overflow-hidden object-cover">
        <DisplayImg src={apt.imgSrc} />
      </div>
      <div className="flex flex-col items-start justify-center w-full flex-grow py-2 gap-2">
        <div className="flex w-full justify-between items-start">
          <p className="font-medium w-3/4 md:truncate">{displayName}</p>
          <div
            className={`${
              apt.listingStatus === "FOR_RENT"
                ? "bg-light-orange"
                : "bg-blue-100"
            }  h-fit px-2 py-1 rounded-full flex justify-center items-center`}
          >
            <p className="text-[8px]">
              {apt.listingStatus === "FOR_RENT" ? "For Rent" : "For Sale"}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-start h-full w-full gap-2">
          <p className="text-sm text-black">{address}</p>
          <div className="flex w-full justify-start items-center gap-3 text-text-gray text-sm">
            <DisplayBdBaSf value={bedrooms} units={units} label="Bd" />
            {bathrooms && <Separator orientation="vertical" />}
            <DisplayBdBaSf value={bathrooms} units={units} label="Ba" />
            {apt.livingArea && <Separator orientation="vertical" />}
            <DisplayBdBaSf value={apt.livingArea} units={units} label="Sf" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t pt-2">
        <DisplayPrice units={units} price={price} />
        <Link
          to={`/${linkId}`}
          className="bg-accent-blue rounded-full p-2 text-white"
          onClick={() =>
            uiStore.addRecentlyViewed(
              zpid,
              displayName,
              bedrooms,
              bathrooms,
              apt.livingArea
            )
          }
        >
          <ArrowUpRightIcon className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
});

export default GridCard;
