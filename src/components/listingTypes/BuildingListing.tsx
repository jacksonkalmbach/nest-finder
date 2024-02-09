import Button from "../ui/Button";
import AboutListing from "../listing/AboutListing";
import BuildingOverview from "../listing/BuildingOverview";
import ListingInfoSection from "../listing/ListingInfoSection";
import ListingPhotoGallery from "../listing/ListingPhotoGallery";
import ListingPhotoGallerySkeleton from "../listing/ListingPhotoGallerySkeleton";
import PricingAndFloorPlans from "../listing/PricingAndFloorPlans";
import ContactListing from "../listing/ContactListing";
import FeesAndPolicies from "../listing/FeesAndPolicies";

const BuildingListing = ({
  data,
  isLoading,
  handleSeePhotos,
}: {
  data: any;
  isLoading: boolean;
  handleSeePhotos: () => void;
}) => {
  console.log("Buidlinglistins.tsx", data);
  return (
    <>
      {data && (
        <div className="relative bg-bg-light font-poppins w-screen flex flex-col">
          <div className="w-full h-1/2" style={{ height: "60vh" }}>
            {!isLoading && data ? (
              <ListingPhotoGallery
                photos={data.photos}
                handleSeePhotos={handleSeePhotos}
              />
            ) : (
              <ListingPhotoGallerySkeleton />
            )}
          </div>
          <div className="flex items-start gap-8 p-6 lg:py-10 lg:px-20">
            <div className="flex flex-col gap-6 w-full lg:w-3/4">
              <AboutListing
                isBuilding={true}
                address={data.address}
                description={data.description}
              />
              <ListingInfoSection title="Pricing and Floor Plans">
                <PricingAndFloorPlans data={data} />
              </ListingInfoSection>

              {data && data.amenityDetails && (
                <ListingInfoSection title="Amenities and Features">
                  <BuildingOverview amenities={data.amenityDetails} />
                </ListingInfoSection>
              )}
              {data.amenityDetails && (
                <ListingInfoSection title="Fees and Policies">
                  <FeesAndPolicies
                    fees={data.amenityDetails.fees}
                    petPolicy={data.amenityDetails.pets}
                    parkingFeatures={data.buildingAttributes.parkingTypes}
                  />
                </ListingInfoSection>
              )}
            </div>
            <div className="hidden grow border-3 border-red-500 lg:flex flex-col sticky top-20 gap-6 justify-start">
              {data.amenityDetails && (
                <ContactListing
                  brokerName={data.buildingName}
                  brokerPhoneNumber={data.buildingPhoneNumber}
                  hours={data.amenityDetails.hours}
                  address={data.address}
                />
              )}
              {/* <RecentlyViewed /> */}
            </div>
          </div>
          <div className="sticky bottom-5 p-3 flex justify-center md:hidden px-4">
            <Button
              text="Contact Listing"
              variant="primary"
              type="button"
              onClick={() => {}}
            />
          </div>
          {/* <FullGallery data={data} /> */}
        </div>
      )}
    </>
  );
};

export default BuildingListing;
