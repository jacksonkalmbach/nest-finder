import React, { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Separator } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsMediumOrSmaller } from "../hooks/useIsMediumOrSmaller";

const ListingCard = ({ apt, index }: { apt: any; index: number }) => {
  const { id, name, bedRange, rentRange, address } = apt;

  const [isGridView, seIsGridView] = useState<boolean>(true);
  const variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const animationDuration = index === 0 ? 0.5 : 0.5 + index * 0.4;

  return (
    <>
      {isGridView ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            ease: "easeInOut",
            duration: animationDuration,
          }}
          className="bg-white row-span-1 col-span-1 rounded-xl border border-gray-100 flex flex-col p-4 justify-between"
        >
          <div className="min-h-[150px] bg-gray-300 rounded-xl"></div>
          <div className="flex flex-col items-start w-full flex-grow py-2 gap-2">
            <div className="flex w-full justify-between items-center">
              <p className="font-medium">{name}</p>
              <div className="bg-light-orange h-fit px-2 py-1 rounded-full flex justify-center items-center">
                <p className="text-[8px]">For Rent</p>
              </div>
            </div>
            <div className="flex flex-col items-start h-full w-full gap-2">
              <p className="text-sm text-text-gray">
                {address.city}, {address.state}
              </p>
              <div className="flex text-sm text-text-gray gap-4">
                <div>{bedRange}</div>
              </div>
              <p className="text-text-gray text-sm">1,200 sqft</p>
            </div>
          </div>
          <div className="flex justify-between items-center border-t pt-2">
            <p>{rentRange}</p>
            <Link
              to={`/${id}`}
              className="bg-accent-blue rounded-full p-2 text-white"
            >
              <ArrowUpRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className="col-span-2 h-[150px] bg-white p-2 rounded-xl flex gap-2">
          <div className="h-full w-1/3 bg-gray-300 rounded-xl"></div>
          <div className="flex flex-col p-2 flex-grow">
            <div className="flex items-center justify-between w-full">
              <p className="font-medium text-base md:text-lg">
                {name === "" ? name : address.lineOne}
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
                <div className="text-xs md:text-sm">{bedRange}</div>
                <Separator orientation="vertical" />
                <div className="hidden md:block">1 Bathroom</div>
                <div className="md:hidden">1 Ba.</div>
                <Separator orientation="vertical" />
                <p className="text-text-gray text-xs md:text-sm">1,200 sqft</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-2">
              <p className="text-base md:text-lg font-medium">{rentRange}</p>
              <Link
                to={`/${id}`}
                className="bg-accent-blue rounded-full p-2 text-white"
              >
                <ArrowUpRightIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListingCard;
