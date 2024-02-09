import { useContext, useEffect, useState } from "react";
import SearchMap from "../components/SearchMap";
import ListingsContainer from "../components/ListingsContainer";
import Pagination from "../components/ui/Pagination";
import { RootStoreContext } from "../context/RootStoreContext";
import { observer } from "mobx-react";
import MobileFilters from "../components/MobileFilters";
import Sidebar from "../components/Sidebar/Sidebar";
import { capitalizeEachWord } from "../utils/capitalizeWords";

const DiscoverPage = observer(() => {
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
    <div className="w-screen grow font-poppins flex bg-bg-light">
      <Sidebar />
      <div
        className="flex flex-col grow"
        style={{ maxHeight: "calc(100vh - 70px)" }}
      >
        <MobileFilters />
        <div className="w-full flex flex-col">
          <div className="w-full flex gap-6 px-4 md:px-6 py-6 md:py-0 ">
            <div
              className="w-full md:w-1/2  flex flex-col gap-4"
              style={{ maxHeight: "calc(100vh - 120px)" }}
            >
              <div className="flex flex-col overflow-auto">
                <div className="p-2 bg-bg-light flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-medium">
                      Apartments in{" "}
                      {locationTitle ? capitalizeEachWord(locationTitle) : ""}
                    </h2>
                    <p className="text-gray-400">
                      {Number(
                        localStorage.getItem("listingCount")
                      ).toLocaleString()}{" "}
                      Results
                    </p>
                  </div>
                </div>
                {isLoading ? <>Loading...</> : <ListingsContainer />}
              </div>
              <div className="w-full flex justify-center items-center">
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
