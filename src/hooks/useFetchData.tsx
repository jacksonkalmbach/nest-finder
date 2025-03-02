import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { RootStoreContext } from "../context/RootStoreContext";

interface FetchDataParams {
  endpoint: string;
  params: Record<string, any>;
  cacheKey?: string;
  cacheVal?: string;
}

export const useFetchData = ({
  endpoint,
  params,
  cacheKey,
  cacheVal,
}: FetchDataParams) => {
  if (params.location !== undefined)
    localStorage.setItem("searchCity", params.location);

  console.log("PARAMS", params);

  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { locationsSearchStore } = useContext(RootStoreContext);

  useEffect(() => {
    const fetchData = async () => {
      if (cacheKey) {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData === cacheVal) {
          setData(JSON.parse(cachedData));
          setIsLoading(false);
          return;
        }
      }

      setIsLoading(true);
      try {
        const response = await axios.request({
          method: "GET",
          url: process.env.REACT_APP_RAPID_API_URL + endpoint,
          params: params,
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_ZILLOW_API_KEY,
            "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
          },
        });
        setData(response.data);
        locationsSearchStore.setListingsData(response.data);

        if (cacheKey) {
          localStorage.setItem(cacheKey, JSON.stringify(response.data));
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, cacheKey]);

  console.log(data);

  return { data, isLoading, error };
};
