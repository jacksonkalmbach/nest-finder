import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QueueCard = ({ apt, index }: { apt: any; index: number }) => {
  const { zpid, address, minPrice, maxPrice, price, title, bedrooms, media } =
    apt;

  const variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const animationDuration =
    index === 0 ? 0.5 : index < 5 ? 0.5 + index * 0.4 : 0;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        ease: "easeInOut",
        duration: animationDuration,
      }}
      className="col-span-2 w-full h-[150px] bg-white p-2 rounded-xl flex gap-2"
    >
      <div className="h-[130px] w-[150px] bg-gray-300 rounded-xl overflow-hidden object-cover">
        <img
          src={media.allPropertyPhotos.highResolution[0]}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-base md:text-base ">
            {title !== "" ? title : address.streetAddress}
          </p>
          <div className="bg-light-orange h-fit px-2 py-1 rounded-full flex justify-center items-center">
            <p className="text-xs">For Rent</p>
          </div>
        </div>
        <div className="flex flex-col items-start h-full w-full gap-2">
          <p className="text-xs md:text-sm text-text-gray">
            {address.city}, {address.state}
          </p>
          <div className="flex text-sm text-text-gray gap-4 items-center ">
            <div className="text-xs md:text-sm">
              {bedrooms ? bedrooms : ""} Bed
            </div>
            <Separator orientation="vertical" />
            <div className="hidden md:block">1 Bathroom</div>
            <div className="md:hidden">1 Ba.</div>
            <Separator orientation="vertical" />
            <p className="text-text-gray text-xs md:text-sm">1,200 sqft</p>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-2">
          <p className="text-base md:text-base font-medium">
            {price !== undefined
              ? "$" + price.value.toLocaleString()
              : `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`}
          </p>
          <Link
            to={`/${zpid}`}
            className="bg-accent-blue rounded-full p-2 text-white"
          >
            <ArrowUpRightIcon className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default QueueCard;
