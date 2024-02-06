import { useState, useEffect } from "react";
import axios from "axios";

interface FetchDataParams {
  endpoint: string;
  params: Record<string, any>;
  cacheKey?: string;
}

export const useFetchData = ({
  endpoint,
  params,
  cacheKey,
}: FetchDataParams) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (cacheKey) {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
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
        console.log("response", response);
        setData(response.data);

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

  return { data, isLoading, error };
};
