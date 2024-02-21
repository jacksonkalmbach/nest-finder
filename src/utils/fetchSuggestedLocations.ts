import axios from "axios";

export const fetchSuggestedLocations = async (
  url: string,
  params: { q: string }
) => {
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
