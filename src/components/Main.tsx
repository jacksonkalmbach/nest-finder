import { Squares2X2Icon, QueueListIcon } from "@heroicons/react/24/solid";
import React from "react";
import ListingCard from "./ListingCard";
import SearchMap from "./SearchMap";
import Sidebar from "./Sidebar";
import ListingsContainer from "./ListingsContainer";

const Main = () => {
  return (
    <div className="w-screen grow font-poppins flex bg-bg-light">
      <Sidebar />
      <div
        className="flex flex-col grow"
        style={{ maxHeight: "calc(100vh - 70px)" }}
      >
        <div className="w-full  flex flex-col">
          <div className="hidden md:flex w-full p-2 justify-start items-center gap-2 px-6 h-[50px]">
            <Squares2X2Icon className="w-6 h-6 text-accent-blue cursor-pointer" />
            <QueueListIcon className="w-6 h-6 text-text-gray cursor-pointer" />
          </div>
          <div className="w-full flex gap-6 px-6 py-6 md:py-0 ">
            <div
              className="w-full md:w-1/2 overflow-auto"
              style={{ maxHeight: "calc(100vh - 120px)" }}
            >
              <ListingsContainer />
            </div>
            <div className="hidden md:flex w-1/2">
              <SearchMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
