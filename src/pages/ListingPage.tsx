import { useEffect, useState } from "react";
import { Separator } from "@radix-ui/themes";
import { HeartIcon } from "@heroicons/react/24/outline";
import PricingAndFloorPlans from "../components/listing/PricingAndFloorPlans";
import BuildingOverview from "../components/listing/BuildingOverview";
import ContactListing from "../components/listing/ContactListing";
import ListingPhotoGallery from "../components/listing/ListingPhotoGallery";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import RecentlyViewed from "../components/RecentlyViewed";
import FullGallery from "../components/listing/FullGallery";
import ListingPhotoGallerySkeleton from "../components/listing/ListingPhotoGallerySkeleton";
import ListingInfoSection from "../components/listing/ListingInfoSection";
import AboutListing from "../components/listing/AboutListing";

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
          <AboutListing data={data} />
          <ListingInfoSection title="Pricing and Floor Plans">
            <PricingAndFloorPlans />
          </ListingInfoSection>
          <ListingInfoSection title="Building Overview">
            <BuildingOverview />
          </ListingInfoSection>
          <ListingInfoSection title="Fees and Policies">
            <></>
          </ListingInfoSection>
          <ListingInfoSection title="Nearby Listings for Rent">
            <></>
          </ListingInfoSection>
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
