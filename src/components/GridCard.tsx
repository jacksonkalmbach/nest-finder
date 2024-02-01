import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Separator } from "@radix-ui/themes";
import { observer } from "mobx-react";
import { useContext } from "react";
import { RootStoreContext } from "../context/RootStoreContext";

const GridCard = observer(
  ({
    apt,
    index,
    onSelected,
  }: {
    apt: any;
    index: number;
    onSelected: (zpid: number) => void;
  }) => {
    const {
      zpid,
      address,
      minPrice,
      maxPrice,
      price,
      title,
      bedrooms,
      bathrooms,
      media,
    } = apt;

    const displayName = title ? title : address.streetAddress;
    const displayPrice = price
      ? price.value
      : `${maxPrice.toLocaleString()} - $${minPrice.toLocaleString()}`;

    const { uiStore } = useContext(RootStoreContext);

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
        className="bg-white row-span-1 col-span-1 rounded-xl border h-full border-gray-100 flex flex-col p-4 justify-between"
        onClick={() => onSelected(zpid)}
      >
        <div className="h-[150px] bg-gray-300 rounded-xl overflow-hidden object-cover">
          <img
            src={media.allPropertyPhotos.highResolution[0]}
            alt="listing"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-start w-full flex-grow py-2 gap-2">
          <div className="flex w-full justify-between items-start">
            <p className="font-medium w-3/4 md:truncate">{displayName}</p>
            <div className="bg-light-orange h-fit px-2 py-1 rounded-full flex justify-center items-center">
              <p className="text-[8px]">For Rent</p>
              {/* <p>{index}</p> */}
            </div>
          </div>
          <div className="flex flex-col justify-evenly items-start h-full w-full gap-2">
            <p className="text-sm text-black">
              {address.city}, {address.state} {address.zipcode}
            </p>
            <div className="flex w-full justify-start items-center gap-3 text-text-gray text-sm">
              <p>{bedrooms ? bedrooms : apt.unitsGroup[0].bedrooms} Bed</p>
              {bathrooms && <Separator orientation="vertical" />}
              {bathrooms && <p>{bathrooms} Bathroom</p>}
              {apt.livingArea && <Separator orientation="vertical" />}
              {apt.livingArea && <p>{apt.livingArea} sqft</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-2">
          <p>${displayPrice.toLocaleString()}</p>
          <Link
            to={`/${zpid}`}
            className="bg-accent-blue rounded-full p-2 text-white"
            onClick={() =>
              uiStore.addRecentlyViewed(
                zpid,
                displayName,
                displayPrice,
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
  }
);

export default GridCard;
