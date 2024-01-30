import { useEffect, useState } from "react";
import { Squares2X2Icon, QueueListIcon } from "@heroicons/react/24/solid";
import SearchMap from "../components/SearchMap";
import Sidebar from "../components/sidebar/Sidebar";
import ListingsContainer from "../components/ListingsContainer";

const url = process.env.REACT_APP_RAPID_API_URL + "/v2/properties/search-for-rent";
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

const DiscoverPage = () => {
  const [aptData, setApt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setApt(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
              {aptData.length && <ListingsContainer data={aptData} />}
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
