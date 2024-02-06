import { DotFilledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import DisplayBdBaSf from "./listingCard/components/DisplayBdBaSf";
import DisplayPrice from "./listingCard/components/DisplayPrice";

interface Props {
  listing: {
    address: string;
    bathrooms?: number;
    bedrooms?: number;
    buildingName?: string;
    lotId?: number;
    zpid?: number;
    imgSrc: string;
    price?: number;
    livingArea?: number;
    units?: {
      beds: string;
      price: string;
    }[];
  };
  idx: number;
}

const FeaturedListing = ({ listing, idx }: Props) => {
  const navigate = useNavigate();
  const {
    address,
    imgSrc,
    buildingName,
    bedrooms,
    bathrooms,
    price,
    units,
    livingArea,
    zpid,
    lotId,
  } = listing;

  const linkTo = lotId ? `lotId/${lotId}` : `zpid/${zpid}`;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      variants={variants}
      transition={{ ease: "easeInOut", duration: idx / 3 }}
      className="w-[350px] h-[400px] bg-white shadow-md rounded-xl overflow-hidden hover:bg-bg-light cursor-pointer"
      onClick={() => navigate(`/${linkTo}`)}
    >
      <div className="h-3/5 w-full object-cover">
        <img src={imgSrc} className="h-full w-full" />
      </div>
      <div className="w-full p-4 flex flex-col justify-center items-center gap-2">
        <div className="text-xl font-medium text-center">
          {buildingName ? buildingName : address}
        </div>
        <DisplayPrice price={price} units={units} />
        <div className="flex items-center gap-2">
          <DisplayBdBaSf
            label="Bd"
            units={units}
            value={bedrooms?.toString()}
          />
          {bedrooms !== undefined && <DotFilledIcon />}
          {bathrooms && <div>{bathrooms} Ba</div>}
          {livingArea && <DotFilledIcon />}
          <DisplayBdBaSf
            units={units}
            value={livingArea?.toString()}
            label="Sf"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedListing;
