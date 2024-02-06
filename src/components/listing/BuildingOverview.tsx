interface Props {
  amenities: {
    customAmenities: {
      rawAmenities: string[];
    };
    unitFeatures: string[];
  };
}

const BuildingOverview = ({ amenities }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {amenities.customAmenities &&
        Object.keys(amenities.customAmenities).length > 0 && (
          <>
            <h4 className="font-medium text-xl">Community Amenities</h4>
            <ul className="flex flex-wrap gap-2">
              {amenities.customAmenities.rawAmenities.map((amenity: string) => (
                <li className="bg-bg-light w-fit rounded-full px-2 py-1">
                  {amenity}
                </li>
              ))}
            </ul>
          </>
        )}
      {amenities.unitFeatures &&
        Object.keys(amenities.unitFeatures).length > 0 && (
          <>
            <h4 className="font-medium text-xl">Apartment Features</h4>
            <ul className="flex flex-wrap gap-2">
              {amenities.unitFeatures.map((amenity: string) => (
                <li className="bg-bg-light w-fit rounded-full px-2 py-1">
                  {amenity}
                </li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
};

export default BuildingOverview;
