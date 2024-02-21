import Button from "../ui/Button";
import AboutListing from "../listing/AboutListing";
import ContactListing from "../listing/ContactListing";
import ListingInfoSection from "../listing/ListingInfoSection";
import ListingPhotoGallery from "../listing/ListingPhotoGallery";
import ListingPhotoGallerySkeleton from "../listing/ListingPhotoGallerySkeleton";
import { useFetchData } from "../../hooks/useFetchData";
import NearbyListingsContainer from "../listing/NearbyListingsContainer";
import RecentlyViewed from "../RecentlyViewed";

import { Table } from "@radix-ui/themes";
import { useEffect } from "react";
import { fetchData } from "../../utils/fetchData";

const PropertyListing = ({
  propData,
  zpid,
  handleSeePhotos,
}: {
  propData: any;
  zpid?: string;
  handleSeePhotos: () => void;
}) => {
  const { data, isLoading, error } = useFetchData({
    endpoint: "images",
    params: {
      zpid: zpid,
    },
  });

  console.log(propData);
  const { streetAddress, attributionInfo } = propData;
  const { brokerName, brokerPhoneNumber } = attributionInfo;

  return (
    <div className=" bg-bg-light font-poppins w-screen flex flex-col">
      <div className="w-full h-1/2" style={{ height: "60vh" }}>
        {!isLoading && data ? (
          <ListingPhotoGallery
            listingPhotos={data.images}
            handleSeePhotos={handleSeePhotos}
          />
        ) : (
          <ListingPhotoGallerySkeleton />
        )}
      </div>
      <div className="flex w-full justify-start items-center gap-8 p-6 lg:py-10 lg:px-20">
        <div className="flex flex-col gap-6 w-full lg:w-3/4">
          {propData && (
            <AboutListing
              isBuilding={false}
              address={propData.address.streetAddress}
              description={propData.description}
              price={propData.price}
              bathrooms={propData.bathrooms}
              bedrooms={propData.bedrooms}
              livingAreaValue={propData.livingAreaValue}
            />
          )}
          {propData.schools && (
            <ListingInfoSection title="Nearby Schools">
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>
                      <p className="font-poppins font-medium">School</p>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <p className="font-poppins font-medium">Grades</p>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <p className="font-poppins font-medium">Distance</p>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <p className="font-poppins font-medium">Rating</p>
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                {propData.schools.map((school: any) => {
                  return (
                    <Table.Body>
                      <Table.Row>
                        <Table.RowHeaderCell>{school.name}</Table.RowHeaderCell>
                        <Table.Cell>{school.grades}</Table.Cell>
                        <Table.Cell>{school.distance} mi</Table.Cell>
                        <Table.Cell>{school.rating}/10</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  );
                })}
              </Table.Root>
            </ListingInfoSection>
          )}
          {propData.priceHistory && (
            <ListingInfoSection title="Pricing History">
              <Table.Root>
                {propData.priceHistory.map((history: any) => {
                  const { date, price } = history;
                  return (
                    <>
                      {price !== null && (
                        <Table.Body>
                          <Table.Row>
                            <Table.RowHeaderCell>{date}</Table.RowHeaderCell>
                            <Table.Cell>${price.toLocaleString()}</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      )}
                    </>
                  );
                })}
              </Table.Root>
            </ListingInfoSection>
          )}
          {propData && (
            <ListingInfoSection title="Nearby Listings for Rent">
              <NearbyListingsContainer data={propData.nearbyHomes} />
            </ListingInfoSection>
          )}
        </div>
        <div className="hidden grow border-3 lg:flex flex-col top-0 gap-6">
          <ContactListing
            brokerName={brokerName === null ? streetAddress : brokerName}
            brokerPhoneNumber={brokerPhoneNumber}
            address={streetAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
