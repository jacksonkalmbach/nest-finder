import { Squares2X2Icon, QueueListIcon } from "@heroicons/react/24/solid";
import React from "react";
import ListingCard from "../components/ListingCard";
import SearchMap from "../components/SearchMap";
import Sidebar from "../components/sidebar/Sidebar";
import ListingsContainer from "../components/ListingsContainer";

const DiscoverPage = () => {
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
          <div className="w-full flex gap-6 px-4 md:px-6 py-6 md:py-0 ">
            <div
              className="w-full md:w-1/2 overflow-auto flex flex-col gap-4"
              style={{ maxHeight: "calc(100vh - 120px)" }}
            >
              <div className="px-2 sticky -top-0 bg-bg-light">
                <h2 className="text-xl font-medium">
                  Apartments in Chicago, IL
                </h2>
                <p className="text-gray-400">133 Results</p>
              </div>
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

export default DiscoverPage;
