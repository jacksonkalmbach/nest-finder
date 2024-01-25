import { Separator } from "@radix-ui/themes";
import { HeartIcon } from "@heroicons/react/24/outline";
import PricingAndFloorPlans from "../components/listing/PricingAndFloorPlans";
import BuildingOverview from "../components/listing/BuildingOverview";
import ContactListing from "../components/listing/ContactListing";
import ListingPhotoGallery from "../components/listing/ListingPhotoGallery";
import Footer from "../components/Footer";
import FeesAndPolicies from "../components/listing/FeesAndPolicies";

const ListingPage = () => {
  return (
    <div className="bg-bg-light font-poppins">
      <ListingPhotoGallery />
      <div className="flex items-start gap-8 p-6 lg:py-10 lg:px-20">
        <div className="flex flex-col gap-6 w-full lg:w-3/4">
          <div className="flex flex-col p-4 md:p-6 justify-start w-full items-start font-poppins col-span-2 bg-white rounded-xl gap-2 md:gap-6">
            <div className="w-full justify-center lg:justify-between flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex flex-col items-start w-full">
                <div className="flex justify-between items-start w-full">
                  <div className="flex flex-col">
                    <h1 className="font-medium text-2xl md:text-3xl mb-2">
                      1441 N. Elk Grove
                    </h1>
                    <p className="text-sm md:text-base">123 Sesame Street</p>
                    <p className="text-sm md:text-base">Chicago, IL 60622</p>
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
                <p className="font-medium">$1,895 - $14,145</p>
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
                <p className="font-medium">464 - 2,616 sqft</p>
              </div>
            </div>
            <p>
              The lushly landscaped Briarwood Apartments in Sunnyvale, CA lets
              you live.
            </p>
          </div>
          <PricingAndFloorPlans />
          <BuildingOverview />
          <FeesAndPolicies />
        </div>
        <div className="hidden grow lg:flex flex-col sticky top-20 gap-6">
          <ContactListing />
          <div className="bg-white rounded-xl p-6 flex flex-col justify-start items-center">
            <p className="font-medium text-xl text-center mb-2">
              Recently Viewed
            </p>
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-bg-light h-[80px] w-full rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer">
                <p className="font-medium">1441 N Elk Grove</p>
                <div className="flex gap-2 items-center">
                  <p className="text-sm">$1,780</p>
                  <Separator orientation="vertical" />
                  <p className="text-sm">Studio, 1 Bath, 415 SF</p>
                </div>
              </div>
              <div className="bg-bg-light h-[80px] w-full rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer">
                <p className="font-medium">1441 N Elk Grove</p>
                <div className="flex gap-2 items-center">
                  <p className="text-sm">$1,780</p>
                  <Separator orientation="vertical" />
                  <p className="text-sm">Studio, 1 Bath, 415 SF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingPage;
