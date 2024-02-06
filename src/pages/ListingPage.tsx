import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PricingAndFloorPlans from "../components/listing/PricingAndFloorPlans";
import BuildingOverview from "../components/listing/BuildingOverview";
import ContactListing from "../components/listing/ContactListing";
import ListingPhotoGallery from "../components/listing/ListingPhotoGallery";
import Footer from "../components/Footer";
import RecentlyViewed from "../components/RecentlyViewed";
import FullGallery from "../components/listing/FullGallery";
import ListingPhotoGallerySkeleton from "../components/listing/ListingPhotoGallerySkeleton";
import ListingInfoSection from "../components/listing/ListingInfoSection";
import AboutListing from "../components/listing/AboutListing";
import Button from "../components/ui/Button";
import NearbyListingsContainer from "../components/listing/NearbyListingsContainer";
import FeesAndPolicies from "../components/listing/FeesAndPolicies";

import { useFetchData } from "../hooks/useFetchData";

const ListingPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useFetchData({
    endpoint: "building",
    params: {
      lotId: params.id,
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <div className="relative bg-bg-light font-poppins w-screen flex flex-col">
      <div className="w-full h-1/2" style={{ height: "60vh" }}>
        {!isLoading && data ? (
          <ListingPhotoGallery photos={data.photos} />
        ) : (
          <ListingPhotoGallerySkeleton />
        )}
      </div>
      <div className="flex items-start gap-8 p-6 lg:py-10 lg:px-20">
        <div className="flex flex-col gap-6 w-full lg:w-3/4">
          <AboutListing data={data} />
          {data && (
            <ListingInfoSection title="Pricing and Floor Plans">
              <PricingAndFloorPlans data={data} />
            </ListingInfoSection>
          )}
          {data && data.amenityDetails && (
            <ListingInfoSection title="Amenities and Features">
              <BuildingOverview amenities={data.amenityDetails} />
            </ListingInfoSection>
          )}
          {/* {data.amenityDetails && (
            <ListingInfoSection title="Fees and Policies">
            <FeesAndPolicies
            fees={data.amenityDetails.fees}
            petPolicy={data.amenityDetails.pets}
            parkingFeatures={data.buildingAttributes.parkingTypes}
            />
            </ListingInfoSection>
          )} */}
          {/* <ListingInfoSection title="Nearby Listings for Rent">
            <NearbyListingsContainer />
          </ListingInfoSection> */}
        </div>
        <div className="hidden grow lg:flex flex-col sticky top-20 gap-6 justify-start">
          {data && (
            <ContactListing
              brokerName={data.buildingName}
              brokerPhoneNumber={data.buildingPhoneNumber}
              hours={data.amenityDetails.hours}
            />
          )}
          {/* <RecentlyViewed /> */}
        </div>
      </div>
      <div className="sticky bottom-5 p-3 flex justify-center md:hidden px-4">
        <Button text="Contact Listing" variant="primary" onClick={() => {}} />
      </div>
      {/* <FullGallery data={data} /> */}
      <Footer />
    </div>
  );
};

export default ListingPage;
