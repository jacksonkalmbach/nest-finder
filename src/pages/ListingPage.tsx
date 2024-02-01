import { useEffect, useState } from "react";
import { Separator } from "@radix-ui/themes";
import { HeartIcon } from "@heroicons/react/24/outline";
import PricingAndFloorPlans from "../components/listing/PricingAndFloorPlans";
import BuildingOverview from "../components/listing/BuildingOverview";
import ContactListing from "../components/listing/ContactListing";
import ListingPhotoGallery from "../components/listing/ListingPhotoGallery";
import Footer from "../components/Footer";
import FeesAndPolicies from "../components/listing/FeesAndPolicies";
import { useParams } from "react-router-dom";
import RecentlyViewed from "../components/RecentlyViewed";
import FullGallery from "../components/listing/FullGallery";
import ListingPhotoGallerySkeleton from "../components/listing/ListingPhotoGallerySkeleton";

const url = process.env.REACT_APP_RAPID_API_URL + "/v2/properties/detail?zpid=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "zillow-com4.p.rapidapi.com",
  },
};

const ListingPage = () => {
  const params = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + params.id, options);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="bg-bg-light font-poppins w-screen flex flex-col">
      <div className="w-full h-1/2" style={{ height: "60vh" }}>
        {data ? (
          <ListingPhotoGallery photos={data.photoUrlsHighRes} />
        ) : (
          <ListingPhotoGallerySkeleton />
        )}
      </div>
      <div className="flex items-start gap-8 p-6 lg:py-10 lg:px-20">
        <div className="flex flex-col gap-6 w-full lg:w-3/4">
          <div className="flex flex-col p-4 md:p-6 justify-start w-full items-start font-poppins col-span-2 bg-white rounded-xl gap-2 md:gap-6">
            <div className="w-full justify-center lg:justify-between flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex flex-col items-start w-full">
                <div className="flex justify-between items-start w-full">
                  <div className="flex flex-col">
                    <h1 className="font-medium text-2xl md:text-3xl mb-2">
                      {data && data.formattedChip.location[0].fullValue}
                    </h1>
                    <p className="text-sm md:text-base">
                      {data && data.formattedChip.location[1].fullValue}
                    </p>
                    <p className="text-sm md:text-base">
                      {data && data.formattedChip.location[2].fullValue}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-end">
                    <div className="w-6 h-6 md:w-8 md:h-8">
                      <HeartIcon className="w-full h-auto text-accent-blue" />
                    </div>
                    <img
                      src="https://images1.apartments.com/i2/mbkz4OaDkHbUzRWhfXWaXVhrA_QS21qtrSHbN33ULos/110/image.jpg"
                      alt=""
                      className="hidden lg:block h-10 md:h-[80px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full text-center justify-around p-2 bg-bg-light rounded-xl text-sm md:text-base">
              <div className="flex flex-col justify-center items-center md:text-base">
                <p>Monthly Rent</p>
                <p className="font-medium">
                  ${data && data.price.toLocaleString()}
                </p>
              </div>
              <Separator orientation="vertical" size={"4"} color="gray" />
              <div className="flex flex-col justify-center items-center">
                <p className="hidden md:block">Bedrooms</p>
                <p className="md:hidden">Beds</p>
                <p className="font-medium">Studio - 3 Bd</p>
              </div>
              <Separator orientation="vertical" size={"4"} />
              <div className="flex flex-col justify-center items-center">
                <p className="hidden md:block">Bathrooms</p>
                <p className="md:hidden">Bath</p>
                <p className="font-medium">1 - 2.5 ba</p>
              </div>
              <Separator
                orientation="vertical"
                size={"4"}
                className="hidden md:block"
              />
              <div className="hidden md:flex flex-col">
                <p>Square Feet</p>
                <p className="font-medium">
                  {data && data.livingAreaValue} sqft
                </p>
              </div>
            </div>
            <p>{data && data.description}</p>
          </div>
          <PricingAndFloorPlans />
          <BuildingOverview />
          <FeesAndPolicies />
        </div>
        <div className="hidden grow lg:flex flex-col sticky top-20 gap-6">
          <ContactListing />
          <RecentlyViewed />
        </div>
      </div>
      {/* <FullGallery data={data} /> */}
      <Footer />
    </div>
  );
};

export default ListingPage;
