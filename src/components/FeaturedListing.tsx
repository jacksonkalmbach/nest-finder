import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  listing: number;
}

const FeaturedListing = ({ listing }: Props) => {
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
      transition={{ ease: "easeInOut", duration: listing / 3 }}
      className="w-[350px] h-[400px] bg-bg-light border rounded-xl hover:scale-105 cursor-pointer"
    ></motion.div>
  );
};

export default FeaturedListing;
