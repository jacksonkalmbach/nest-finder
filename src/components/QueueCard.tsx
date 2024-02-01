import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QueueCard = ({
  apt,
  index,
  onSelected,
}: {
  apt: any;
  index: number;
  onSelected: (zpid: number) => void;
}) => {
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
      className="w-full h-[150px] bg-white p-2 rounded-xl flex gap-2"
      onClick={() => onSelected(zpid)}
    >
      <div className="h-[130px] min-w-[150px] bg-gray-300 rounded-xl overflow-hidden object-cover">
        <img
          src={media.allPropertyPhotos.highResolution[0]}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="w-full flex flex-col p-2">
        <div className="grid grid-cols-5 w-full gap-2 items-start ">
          <div className="col-span-4">
            <p className="font-medium w-full text-base md:text-base overflow-hidden truncate">
              {title !== "" ? title : address.streetAddress}
            </p>
          </div>
          <div className="bg-light-orange col-span-1 h-fit px-2 py-1 rounded-full flex justify-center items-center">
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
