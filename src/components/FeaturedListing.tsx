import { DotFilledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

interface Props {
  listing: any;
  idx: number;
}

const FeaturedListing = ({ listing, idx }: Props) => {
  const navigate = useNavigate();
  const { property } = listing;

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
      onClick={() => navigate(`/${property.zpid}`)}
    >
      <div className="h-3/5 w-full object-cover">
        <img
          src={listing.property.media.allPropertyPhotos.highResolution[0]}
          className="h-full w-full"
        />
      </div>
      <div className="w-full p-4 flex flex-col justify-center items-center gap-2">
        <div className="text-lg font-medium text-center">
          {property.title ? property.title : property.address.streetAddress}
        </div>
        <div>{property.address.streetAddress}</div>
        <div className="flex items-center gap-2">
          {property.bedrooms !== undefined && (
            <div>
              {property.bedrooms === 0 ? "Studio" : property.bedrooms + " Bd"}
            </div>
          )}
          {property.bedrooms !== undefined && <DotFilledIcon />}
          {property.bathrooms && <div>{property.bathrooms} Ba</div>}
          {property.bathrooms && <DotFilledIcon />}
          <div>
            $
            {property.price
              ? property.price.value.toLocaleString()
              : `${property.minPrice.toLocaleString()} - $${property.maxPrice.toLocaleString()}`}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedListing;
