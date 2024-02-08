import Hero from "../components/Hero";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import FeaturedListing from "../components/FeaturedListing";

import { useNavigate } from "react-router-dom";
import SkeletonFeatureListing from "../components/SkeletonFeatureListing";
import { useFetchData } from "../hooks/useFetchData";
import { capitalizeEachWord } from "../utils/capitalizeWords";

const HomePage = () => {
  const navigate = useNavigate();

  const cachedCity = localStorage.getItem("searchCity");
  const defaultCity = cachedCity ? cachedCity : "Chicago, IL";
  localStorage.setItem("defaultCity", defaultCity);

  const { data, isLoading, error } = useFetchData({
    endpoint: "propertyExtendedSearch",
    params: {
      location: defaultCity,
      status_type: "ForRent",
    },
    cacheKey: "featuredListings",
    cacheVal: defaultCity,
  });

  return (
    <div className="w-screen min-h-screen flex-col grow font-poppins">
      <Hero />
      <div className="w-full flex flex-col p-12 justify-center items-center gap-6">
        <h2 className="text-3xl text-center md:text-4xl font-medium">
          Featured Listings in {capitalizeEachWord(defaultCity)}
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 w-full md:justify-around lg:flex-row">
          {!isLoading ? (
            data.props.slice(0, 4).map((listing: any, index: number) => {
              return <FeaturedListing listing={listing} idx={index} />;
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
            type="button"
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
