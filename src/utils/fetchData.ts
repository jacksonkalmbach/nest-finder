import axios from "axios";
import { SearchParamsType } from "../types/SearchParamsTypes";

export const fetchData = async (url: string, params: SearchParamsType) => {
  const cachedCity = localStorage.getItem("searchCity");
  const defaultCity = cachedCity ? cachedCity : "Chicago, IL";

  if (params.location === "") {
    params.location = defaultCity;
  }

  if (params.status_type === "ForSale") {
    const minPrice = params.rentMaxPrice;
    const maxPrice = params.rentMaxPrice;
    params.minPrice = minPrice;
    params.maxPrice = maxPrice;
    params.rentMinPrice = undefined;
    params.rentMaxPrice = undefined;
  }
  const response = await axios.request({
    method: "GET",
    url: url,
    params: params,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_ZILLOW_API_KEY,
      "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
    },
  });

  return response;
};
