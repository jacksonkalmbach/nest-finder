import React from "react";

interface Props {
  buildingAmenities: string[];
  aptAmenities: string[];
}

const BuildingOverview = ({ buildingAmenities, aptAmenities }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-xl">Community Amenities</h4>
      <ul className="flex flex-wrap gap-2">
        {buildingAmenities.map((amenity: string) => (
          <li className="bg-bg-light w-fit rounded-full px-2 py-1">
            {amenity}
          </li>
        ))}
      </ul>
      <h4 className="font-medium text-xl">Apartment Features</h4>
      <ul className="flex flex-wrap gap-2">
        {aptAmenities.map((amenity: string) => (
          <li className="bg-bg-light w-fit rounded-full px-2 py-1">
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildingOverview;
