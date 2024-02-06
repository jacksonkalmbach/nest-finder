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
import BuildingListing from "../components/listingTypes/BuildingListing";
import PropertyListing from "../components/listingTypes/PropertyListing";

const ListingPage = () => {
  const params = useParams();
  let endpoint;
  let paramsObj;

  if (params.locationType === "zpid") {
    endpoint = "property";
    paramsObj = {
      zpid: params.id,
    };
  } else {
    endpoint = "building";
    paramsObj = {
      lotId: params.id,
    };
  }

  const { data, isLoading, error } = useFetchData({
    endpoint: endpoint,
    params: paramsObj,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <div className="relative bg-bg-light font-poppins w-screen flex flex-col">
      {params.locationType === "zpid" ? (
        <PropertyListing propData={data} zpid={params.id} />
      ) : (
        <BuildingListing data={data} isLoading={isLoading} />
      )}
      <Footer />
    </div>
  );
};

export default ListingPage;
