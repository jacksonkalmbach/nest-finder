import { HeartIcon } from "@heroicons/react/24/outline";
import { Separator } from "@radix-ui/themes";

interface Props {
  address: string;
  buildingName?: string;
  description: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  livingAreaValue?: number;
  units?: {}[];
}

const AboutListing = ({
  address,
  buildingName,
  description,
  price,
  bedrooms,
  bathrooms,
  livingAreaValue,
}: Props) => {
  return (
    <div className="flex flex-col p-4 md:p-6 justify-start w-full items-start font-poppins col-span-2 bg-white rounded-xl gap-2 md:gap-6">
      <div className="w-full justify-center lg:justify-between flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col">
              <h1 className="font-medium text-2xl md:text-3xl mb-2">
                {buildingName ? buildingName : address}
              </h1>
              <p className="text-sm md:text-base">{address}</p>
            </div>
            <div className="flex flex-col justify-center items-end">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <HeartIcon className="w-full h-auto text-accent-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full text-center justify-around p-2 bg-bg-light rounded-xl text-sm md:text-base">
        <div className="flex flex-col justify-center items-center md:text-base">
          <p>Monthly Rent</p>
          {price && <p className="font-medium">${price.toLocaleString()}</p>}
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="hidden md:block">Bedrooms</p>
          <p className="md:hidden">Beds</p>
          <p className="font-medium">{bedrooms}</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="hidden md:block">Bathrooms</p>
          <p className="md:hidden">Bath</p>
          <p className="font-medium">{bathrooms}</p>
        </div>

        {livingAreaValue && (
          <div className="hidden md:flex flex-col">
            <p>Square Feet</p>
            <p className="font-medium">{livingAreaValue} sqft</p>
          </div>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default AboutListing;
