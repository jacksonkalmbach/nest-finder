import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Footer from "../components/Footer";
import BuildingListing from "../components/listingTypes/BuildingListing";
import PropertyListing from "../components/listingTypes/PropertyListing";

import { useFetchData } from "../hooks/useFetchData";
import FullGallery from "../components/listing/FullGallery";
import { RootStoreContext } from "../context/RootStoreContext";

const options = {
  method: "GET",
  url: "https://zillow-com1.p.rapidapi.com/building",
  params: { lotId: "980786" },
  headers: {
    "x-rapidapi-key": "176122d198msh9e3d591dfc3f356p1c6bb1jsnd7655b1a95f2",
    "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
  },
};

const ListingPage = () => {
  const navigate = useNavigate();
  const [seePhotos, setSeePhotos] = useState<boolean>(false);
  const params = useParams();
  const listingType = params.locationType === "zpid" ? "zpid" : "lotId";

  const { locationsSearchStore } = useContext(RootStoreContext);

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
    <>
      {data && (
        <div className="bg-bg-light font-poppins w-screen flex flex-col">
          {seePhotos ? (
            <FullGallery
              buildingPhotos={data?.photos}
              // listingPhotos={propImgs.images}
              handleCloseGallery={() => setSeePhotos(false)}
            />
          ) : listingType === "zpid" ? (
            <PropertyListing
              propData={data}
              zpid={params.id}
              handleSeePhotos={() => navigate(`/zpid/${params.id}/images`)}
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
