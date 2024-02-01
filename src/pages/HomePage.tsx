import Hero from "../components/Hero";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import FeaturedListing from "../components/FeaturedListing";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonFeatureListing from "../components/SkeletonFeatureListing";

const cachedCity = localStorage.getItem("searchCity");
const defaultCity = cachedCity ? cachedCity : "Chicago, IL";
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
    location: defaultCity,
  }),
};

const HomePage = () => {
  const [featuredListings, setFeaturedListings] = useState([]);
  const searchedCity = localStorage.getItem("searchCity");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setFeaturedListings(result.data);
        console.log(result.data);
        localStorage.setItem("cachedHomeResults", JSON.stringify(result));
      } catch (error) {
        console.error(error);
      }
    };

    const cachedResults = localStorage.getItem("cachedHomeResults");
    if (cachedResults) {
      const result = JSON.parse(cachedResults);

      setFeaturedListings(result.data);
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="w-screen min-h-screen flex-col grow font-poppins">
      <Hero />

      <div className="w-full flex flex-col p-12 justify-center items-center gap-6">
        <h2 className="text-3xl text-center md:text-4xl font-medium">
          Featured Listings in {defaultCity}
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 w-full md:justify-around lg:flex-row">
          {featuredListings && featuredListings.length > 0 ? (
            featuredListings.slice(0, 4).map((list: number, index: number) => {
              return <FeaturedListing listing={list} idx={index} />;
            })
          ) : (
            <>
              <SkeletonFeatureListing />
              <SkeletonFeatureListing />
              <SkeletonFeatureListing />
              <SkeletonFeatureListing />
            </>
          )}
        </div>
        <div className="w-full flex justify-center items-center md:w-[200px]">
          <Button
            text="View More"
            variant="primary"
            onClick={() => navigate("/discover")}
          />
        </div>
      </div>
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default HomePage;
