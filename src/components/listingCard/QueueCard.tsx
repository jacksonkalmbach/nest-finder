import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DisplayImg from "./components/DisplayImg";
import DisplayPrice from "./components/DisplayPrice";
import DisplayBdBaSf from "./components/DisplayBdBaSf";

const QueueCard = ({
  apt,
  index,
  onSelected,
}: {
  apt: any;
  index: number;
  onSelected: (zpid: string) => void;
}) => {
  const {
    zpid,
    address,
    units,
    price,
    bedrooms,
    bathrooms,
    livingArea,
    imgSrc,
  } = apt;

  const displayName = apt.buildingName ? apt.buildingName : apt.address;

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
      <div className="h-full w-[250px] bg-gray-300 rounded-xl overflow-hidden object-fit flex justify-center items-center">
        <DisplayImg src={imgSrc} />
      </div>
      <div className="w-full flex flex-col p-2">
        <div className="grid grid-cols-5 w-full gap-2 items-start ">
          <div className="col-span-4">
            <p className="font-medium w-full text-base md:text-base overflow-hidden truncate">
              {displayName}
            </p>
          </div>
          <div className="bg-light-orange col-span-1 h-fit px-2 py-1 rounded-full flex justify-center items-center">
            <p className="text-xs">For Rent</p>
          </div>
        </div>
        <div className="flex flex-col items-start h-full w-full gap-2">
          <p className="text-xs md:text-sm text-text-gray">{address}</p>
          <div className="flex text-sm text-text-gray gap-4 items-center ">
            <DisplayBdBaSf value={bedrooms} units={units} label="Bd" />
            {bathrooms && <Separator orientation="vertical" />}
            <DisplayBdBaSf value={bathrooms} units={units} label="Ba" />
            {livingArea && <Separator orientation="vertical" />}
            <DisplayBdBaSf value={livingArea} label="Sf" />
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-2">
          <DisplayPrice price={price} units={units} />
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