import axios from "axios";

export const fetchImages = async (id: string) => {
  if (id === "") return;
  const url = process.env.REACT_APP_RAPID_API_URL + "images";
  const response = await axios.request({
    method: "GET",
    url: url,
    params: { zpid: id },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_ZILLOW_API_KEY,
      "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
    },
  });

  return response;
};
