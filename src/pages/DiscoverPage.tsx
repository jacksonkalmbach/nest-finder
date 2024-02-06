import { useEffect, useState } from "react";
import SearchMap from "../components/SearchMap";
import Sidebar from "../components/sidebar/Sidebar";
import ListingsContainer from "../components/ListingsContainer";
import ToggleView from "../components/ToggleView";
import axios from "axios";
import { Pagination } from "@mui/material";

const url = process.env.REACT_APP_RAPID_API_URL + "propertyExtendedSearch";

type SearchParamsType = {
  location: string;
  statusType: string;
  homeType: string;
  rentMinPrice: number | null;
  rentMaxPrice: number | null;
  bathsMin: number;
  bathsMax: number;
  bedsMin: number;
  bedsMax: number;
  page: number;
};

const defaultSearchParams: SearchParamsType = {
  location: "Chicago, IL",
  statusType: "ForRent",
  homeType: "",
  rentMinPrice: null,
  rentMaxPrice: null,
  bathsMin: 0,
  bathsMax: 0,
  bedsMin: 0,
  bedsMax: 0,
  page: 1,
};

const DiscoverPage = () => {
  const [aptData, setApt] = useState<any>([]);
  const [searchParams, setSearchParams] =
    useState<SearchParamsType>(defaultSearchParams);
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [locations, setLocations] = useState<any>([]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    fetchData(value);
  };

  const fetchData = async (page?: number) => {
    const params: {
      location: string;
      status_type: string;
      home_type?: string;
      rentMinPrice?: number;
      rentMaxPrice?: number;
      bathsMin?: number;
      bathsMax?: number;
      bedsMin?: number;
      bedsMax?: number;
      page?: number;
    } = {
      location: searchParams.location,
      status_type: searchParams.statusType,
    };

    if (searchParams.rentMinPrice)
      params.rentMinPrice = searchParams.rentMinPrice;
    if (searchParams.rentMaxPrice)
      params.rentMaxPrice = searchParams.rentMaxPrice;
    if (searchParams.homeType) params.home_type = searchParams.homeType;
    if (searchParams.bathsMin > 0) params.bathsMin = searchParams.bathsMin;
    if (searchParams.bathsMax > 0) params.bathsMax = searchParams.bathsMax;
    if (searchParams.bedsMin > 0) params.bedsMin = searchParams.bedsMin;
    if (searchParams.bedsMax > 0) params.bedsMax = searchParams.bedsMax;
    if (page) params.page = page;

    try {
      const response = await axios.request({
        method: "GET",
        url: url,
        params: params,
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_ZILLOW_API_KEY,
          "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
        },
      });
      // setSearchParams(params);
      console.log(response.data);
      setApt(response.data.props);
      setPageCount(response.data.totalPages);
      localStorage.setItem("searchParamsCache", JSON.stringify(params));
      localStorage.setItem(
        "searchResultCache",
        JSON.stringify(response.data.props)
      );
      localStorage.setItem("searchCity", params.location);
    } catch (error) {
      console.error(error);
    }
  };

  const cachedParams = localStorage.getItem("searchParamsCache");
  const cachedResults = localStorage.getItem("searchResultCache");

  useEffect(() => {
    if (cachedParams && cachedResults) {
      if (JSON.parse(cachedParams))
        try {
          const parsedData = JSON.parse(cachedResults);
          setApt(parsedData);
        } catch (parseError) {
          console.error("Error parsing cached results:", parseError);
          fetchData();
        }
    } else {
      fetchData();
    }
  }, []);

  const handleSearch = (city?: string) => {
    if (city) localStorage.setItem("searchCity", city);
    fetchData();
  };

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

  console.log(aptData);

  return (
    <div className="w-screen grow font-poppins flex bg-bg-light">
      <Sidebar
        handleSearchParams={(paramKey, value) =>
          handleSetSearchParam(paramKey, value)
        }
        handleSearch={handleSearch}
      />
      <div
        className="flex flex-col grow"
        style={{ maxHeight: "calc(100vh - 70px)" }}
      >
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
                    <p className="text-gray-400">{aptData.length} Results</p>
                  </div>
                  <ToggleView />
                </div>
                {aptData.length > 0 && <ListingsContainer data={aptData} />}
              </div>
              <div className="w-full flex justify-center items-center">
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={handleChange}
                />
              </div>
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
