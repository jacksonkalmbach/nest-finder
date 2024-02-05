import { useEffect, useState } from "react";
import SearchMap from "../components/SearchMap";
import Sidebar from "../components/sidebar/Sidebar";
import ListingsContainer from "../components/ListingsContainer";
import ToggleView from "../components/ToggleView";

const url =
  process.env.REACT_APP_RAPID_API_URL + "/v2/properties/search-for-rent";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "zillow-com4.p.rapidapi.com",
  },
  body: JSON.stringify({
    location: "Lincoln Park, Chicago, IL",
    price: { max: 2000 },
    bedrooms: { min: 1, max: 1 },
  }),
};

const defaultSearchParams = {
  location: "",
  statusType: "ForRent",
  homeType: "",
  rentMinPrice: null,
  rentMaxPrice: null,
  bathsMin: null,
  bathsMax: null,
  bedsMin: null,
  bedsMax: null,
};

const DiscoverPage = () => {
  const [aptData, setApt] = useState<any>([]);
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const [locations, setLocations] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setApt(result.data);
        getLocations(result.data);

        localStorage.setItem("recentSearch", JSON.stringify(result.data));
        localStorage.setItem("searchCity", "Chicago, IL");
      } catch (error) {
        console.error(error);
      }
    };

    const cachedResults = localStorage.getItem("recentSearch");

    if (cachedResults) {
      setApt(JSON.parse(cachedResults));
    } else {
      fetchData();
    }
  }, []);

  const getLocations = (data: any) => {
    const newLocations = data.map((apt: any) => {
      return {
        location: apt.property.location,
        price: apt.property.price,
      };
    });

    setLocations(newLocations);
  };

  const handleSetSearchParam = (paramKey: string, value: any) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [paramKey]: value,
    }));
  };

  useEffect(() => {
    console.log(searchParams);
  }, [searchParams]);

  return (
    <div className="w-screen grow font-poppins flex bg-bg-light">
      <Sidebar
        handleSearchParams={(paramKey, value) =>
          handleSetSearchParam(paramKey, value)
        }
      />
      <div
        className="flex flex-col grow"
        style={{ maxHeight: "calc(100vh - 70px)" }}
      >
        <div className="w-full flex flex-col">
          <div className="w-full flex gap-6 px-4 md:px-6 py-6 md:py-0 ">
            <div
              className="w-full md:w-1/2 overflow-auto flex flex-col gap-4"
              style={{ maxHeight: "calc(100vh - 120px)" }}
            >
              <div className="p-2 bg-bg-light flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-medium">
                    Apartments in Chicago, IL
                  </h2>
                  <p className="text-gray-400">{aptData.length} Results</p>
                </div>
                <ToggleView />
              </div>
              {aptData.length > 0 && <ListingsContainer data={aptData} />}
            </div>
            <div className="hidden md:flex w-1/2 h-[730px] mt-8 rounded-xl overflow-hidden">
              <SearchMap data={aptData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
