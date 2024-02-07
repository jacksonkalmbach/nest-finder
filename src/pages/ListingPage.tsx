import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import BuildingListing from "../components/listingTypes/BuildingListing";
import PropertyListing from "../components/listingTypes/PropertyListing";

import { useFetchData } from "../hooks/useFetchData";
import FullGallery from "../components/listing/FullGallery";

const ListingPage = () => {
  const [seePhotos, setSeePhotos] = useState<boolean>(false);
  const params = useParams();
  const listingType = params.locationType === "zpid" ? "zpid" : "lotId";

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

  // const {
  //   data: propImgs,
  //   isLoading: propImgsLoading,
  //   error: propImgsError,
  // } = useFetchData({
  //   endpoint: "images",
  //   params: { zpid: params.id },
  // });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <>
      {data && (
        <div className="bg-bg-light font-poppins w-screen flex flex-col">
          {seePhotos ? (
            <FullGallery
              buildingPhotos={data.photos}
              // listingPhotos={propImgs.images}
              handleCloseGallery={() => setSeePhotos(false)}
            />
          ) : listingType === "zpid" ? (
            <PropertyListing
              propData={data}
              zpid={params.id}
              handleSeePhotos={() => setSeePhotos(true)}
            />
          ) : (
            <BuildingListing
              data={data}
              isLoading={isLoading}
              handleSeePhotos={() => setSeePhotos(true)}
            />
          )}

          <Footer />
        </div>
      )}
    </>
  );
};

export default ListingPage;
