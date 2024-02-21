import { useContext, useEffect, useState } from "react";
import InputField from "./ui/InputField";
import Underline from "./Underline";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { fetchSuggestedLocations } from "../utils/fetchSuggestedLocations";
import { observer } from "mobx-react";
import { RootStoreContext } from "../context/RootStoreContext";

const propertySearchUrl =
  process.env.REACT_APP_RAPID_API_URL + "propertyExtendedSearch";
const citySearchUrl =
  process.env.REACT_APP_RAPID_API_URL + "locationSuggestions";

const Hero = observer(() => {
  const navigate = useNavigate();

  const { locationsSearchStore } = useContext(RootStoreContext);
  const defaultCity = localStorage.getItem("defaultCity");
  const searchCity = localStorage.getItem("searchCity");
  const defaultSearchVal = searchCity ? searchCity : "";

  const [searchVal, setSearchVal] = useState<string>("");
  const [cities, setCities] = useState<{ display: string }[]>([]);

  const handleSearchClick = (val?: string) => {
    if (searchVal === "") return;
    const searchLocation = val ? val : searchVal;

    fetchData(propertySearchUrl, {
      location: searchLocation,
      status_type: "ForRent",
    })
      .then((response) => {
        if (response && response.data && response.data.props) {
          localStorage.setItem("searchCity", searchLocation);
          locationsSearchStore.setListingsData(response.data);
          locationsSearchStore.setListingCount(response.data.totalResultCount);
          localStorage.setItem("listingCount", response.data.totalResultCount);
          locationsSearchStore.setListingPageCount(response.data.totalPages);
          localStorage.setItem("totalPages", response.data.totalPages);
          navigate("/discover");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data", error);
      });
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchVal.length % 3 === 0 && searchVal.length !== 0) {
        fetchSuggestedLocations(citySearchUrl, { q: searchVal }).then(
          (response) => setCities(response.data.results)
        );
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchVal]);

  useEffect(() => {
    if (searchVal.length === 0) {
      setCities([]);
    }
  }, [searchVal]);

  return (
    <div className="w-full h-3/4 flex justify-center items-center bg-bg-light p-6">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center md:items-start w-fit md:gap-4 md:flex-row">
          <h1 className="text-6xl md:text-8xl font-medium text-end font-lilita">
            Find your{" "}
          </h1>
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-6xl md:text-8xl font-medium font-lilita text-accent-blue">
              {" "}
              perfect home
            </h1>
            <div className="w-[300px] md:w-[400px]">
              <Underline />
            </div>
          </div>
        </div>
        <h3 className="text-2xl text-center md:text-3xl font-poppins">
          Effortless Apartment Hunting at Your Fingertips
        </h3>
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="hidden md:block md:relative w-full h-full">
            <InputField
              variant="primary"
              iconVariant="search"
              placeholder="Start Searching"
              setValue={(value) => setSearchVal(value)}
            />
            {cities?.length > 0 && (
              <div className="absolute bg-white mt-2 w-full rounded-xl p-4 border">
                {cities?.map((city: { display: string }) => {
                  console.log(city);
                  return (
                    <div
                      className="hover:bg-bg-light rounded-xl p-2 cursor-pointer"
                      onClick={() => handleSearchClick(city.display)}
                    >
                      {city.display}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="block md:hidden">
            <Button
              text="Start Searching"
              type="button"
              variant={searchVal === "" ? "disabled" : "primary"}
              onClick={handleSearchClick}
            />
          </div>
          <div className="hidden md:block w-full md:w-[200px]">
            <Button
              text="Go"
              type="button"
              variant="primary"
              onClick={handleSearchClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
