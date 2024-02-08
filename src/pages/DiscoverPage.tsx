import { useContext } from "react";
import SearchMap from "../components/SearchMap";
import ListingsContainer from "../components/ListingsContainer";
import ToggleView from "../components/ToggleView";
import Pagination from "../components/ui/Pagination";
import { RootStoreContext } from "../context/RootStoreContext";
import { observer } from "mobx-react";
import MobileFilters from "../components/MobileFilters";
import Sidebar from "../components/sidebar/Sidebar";

const DiscoverPage = observer(() => {
  const { locationsSearchStore } = useContext(RootStoreContext);
  console.log("discoverpage.tsx", locationsSearchStore.listingsData);
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
                      Apartments in {localStorage.getItem("searchCity")}
                    </h2>
                    <p className="text-gray-400">
                      {locationsSearchStore.listingCount.toLocaleString()}{" "}
                      Results
                    </p>
                  </div>
                  <ToggleView />
                </div>
                <ListingsContainer />
              </div>
              <div className="w-full flex justify-center items-center">
                <Pagination />
              </div>
            </div>
            <div className="hidden md:flex w-1/2 h-[730px] mt-8 rounded-xl overflow-hidden">
              {/* <SearchMap /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DiscoverPage;
