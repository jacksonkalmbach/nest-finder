import { useContext, useEffect, useState } from "react";
import InputField from "./ui/InputField";
import Underline from "./Underline";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { observer } from "mobx-react";
import { RootStoreContext } from "../context/RootStoreContext";

const url = process.env.REACT_APP_RAPID_API_URL + "propertyExtendedSearch";

const Hero = observer(() => {
  const navigate = useNavigate();
  const { locationsSearchStore } = useContext(RootStoreContext);
  const defaultCity = localStorage.getItem("searchCity");
  const searchCity = defaultCity ? defaultCity : "";
  const [searchVal, setSearchVal] = useState<string>(searchCity);

  const handleSearchClick = () => {
    const fetchResponse = async () => {
      console.log("searchVal", searchVal);
      try {
        const response = await fetchData(url, {
          location: "jacksonville, fl",
          status_type: "ForRent",
        });
        if (response && response.data) {
          locationsSearchStore.setListingsData(response.data);
          locationsSearchStore.setListingCount(response.data.totalResultCount);
          locationsSearchStore.setListingPageCount(response.data.totalPages);
          navigate("/discover");
        } else {
          console.error("No data received from fetchData");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchResponse();
  };

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
          <div className="hidden md:block w-full h-full">
            <InputField
              variant="primary"
              iconVariant="search"
              defaultValue={searchVal}
              placeholder="Start Searching"
              setValue={(value) => setSearchVal(value)}
            />
          </div>
          <div className="block md:hidden">
            <Button
              text="Start Searching"
              variant="primary"
              onClick={handleSearchClick}
            />
          </div>
          <div className="hidden md:block w-full md:w-[200px]">
            <Button text="Go" variant="primary" onClick={handleSearchClick} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
