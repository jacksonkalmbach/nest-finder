import React from "react";
import Button from "../ui/Button";

interface Photo {
  mixedSources: {
    jpeg: {
      url: string;
    }[];
  };
}

interface Props {
  photos?: Photo[];
  listingPhotos?: string[];
  handleSeePhotos: () => void;
}

const ListingPhotoGallery = ({
  photos,
  listingPhotos,
  handleSeePhotos,
}: Props) => {
  let normalizedPhotos: string[] = [];

  if (photos && Array.isArray(photos)) {
    normalizedPhotos = photos.map((photo) => photo.mixedSources.jpeg[0].url);
  } else if (listingPhotos && Array.isArray(listingPhotos)) {
    normalizedPhotos = listingPhotos;
  }

  return (
    <div className="w-full h-full lg:px-20 md:pt-8">
      <div className="relative w-full h-full grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 gap-1 md:rounded-xl overflow-hidden">
        {normalizedPhotos &&
          normalizedPhotos.slice(0, 5).map((url, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "md:row-span-2 md:col-span-2"
                  : "hidden md:flex w-full md:row-span-1 md:col-span-1"
              } overflow-hidden`}
            >
              <img
                src={url}
                alt={`listing ${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        <div className="hidden md:block absolute w-[100px] bottom-5 right-5">
          <Button
            text="View All"
            variant="seeThrough"
            onClick={handleSeePhotos}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingPhotoGallery;
