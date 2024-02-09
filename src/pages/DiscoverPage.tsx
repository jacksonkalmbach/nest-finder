import { useContext, useEffect, useState } from "react";
import SearchMap from "../components/SearchMap";
import ListingsContainer from "../components/ListingsContainer";
import Pagination from "../components/ui/Pagination";
import { RootStoreContext } from "../context/RootStoreContext";
import { observer } from "mobx-react";
import MobileFilters from "../components/MobileFilters";
import Sidebar from "../components/Sidebar/Sidebar";
import { capitalizeEachWord } from "../utils/capitalizeWords";
import { DropdownMenu } from "@radix-ui/themes";
import SortBy from "../components/SortBy";
import { ListBulletIcon, MapIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import MobileSelectedListing from "../components/listing/MobileSelectedListing";

const DiscoverPage = observer(() => {
  const [showList, setShowList] = useState<boolean>(true);
  const [listings, setLisings] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { locationsSearchStore } = useContext(RootStoreContext);

  useEffect(() => {
    if (locationsSearchStore.listingsData.props) {
      setLisings(locationsSearchStore.listingsData.props);
    }
  }, [locationsSearchStore.listingsData.props]);

  useEffect(() => {
    setIsLoading(true);
    if (locationsSearchStore.listingsData) {
      setLisings(locationsSearchStore.listingsData);
      setIsLoading(false);
    }
  }, []);

  const locationTitle = localStorage.getItem("searchCity")
    ? localStorage.getItem("searchCity")
    : "";

  return (
    <div className="relative w-screen grow font-poppins flex bg-bg-light">
      <Sidebar />
      <div
        className="flex flex-col grow"
        // style={{ maxHeight: "calc(100vh - 70px)" }}
      >
        <MobileFilters />
        <div className="w-full flex flex-col">
          <div className="w-full flex gap-6 px-4 md:px-6 py-6 md:py-0 ">
            <div
              className="w-full md:w-1/2  flex flex-col gap-4"
              style={{ maxHeight: "calc(100vh - 120px)" }}
            >
              <div className="flex flex-col overflow-auto gap-4">
                <div className="p-2 bg-bg-light flex justify-between items-end md:items-center">
                  <div>
                    <h2 className="md:text-xl font-medium">
                      Apartments in{" "}
                      {locationTitle ? capitalizeEachWord(locationTitle) : ""}
                    </h2>
                    <p className="text-sm md:text-base text-gray-400">
                      {Number(
                        localStorage.getItem("listingCount")
                      ).toLocaleString()}{" "}
                      Results
                    </p>
                  </div>
                  <SortBy params={locationsSearchStore.searchParams} />
                  <div
                    className="lg:hidden flex items-center gap-1"
                    onClick={() => setShowList(!showList)}
                  >
                    {showList ? <p>Map</p> : <p>List</p>}
                    {showList ? (
                      <MapIcon className="w-6 h-6" />
                    ) : (
                      <ListBulletIcon className="w-5 h-5" />
                    )}
                  </div>
                </div>
                {showList ? (
                  <div className="flex flex-col gap-4">
                    {isLoading ? <>Loading...</> : <ListingsContainer />}
                    <div className="w-full flex justify-center items-center lg:hidden">
                      <Pagination />
                    </div>
                    <div className="w-full">
                      <Footer />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="md:hidden flex h-[600px] w-full">
                      <SearchMap srcData={listings} />
                    </div>
                    <MobileSelectedListing />
                  </>
                )}
              </div>
              <div className="hidden w-full lg:flex justify-center items-center">
                <Pagination />
              </div>
            </div>
            <div className="hidden md:flex w-1/2 h-[730px] mt-8 rounded-xl overflow-hidden">
              <SearchMap srcData={listings} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DiscoverPage;
