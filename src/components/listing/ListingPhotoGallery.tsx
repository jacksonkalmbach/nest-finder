import React from "react";
import { SAMPLE_IMAGES } from "../../DATA";

interface Props {
  photos: {
    url: string;
  }[];
}

const ListingPhotoGallery = ({ photos }: Props) => {
  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 gap-1 overflow-hidden">
      {photos.map((img, index) => {
        return index === 0 ? (
          <div className="md:row-span-2 md:col-span-2 overflow-hidden">
            <img
              src={img.url}
              alt="listing"
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full md:row-span-1 md:col-span-1 overflow-hidden">
            <img
              src={img.url}
              alt="listing"
              className="object-cover w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListingPhotoGallery;
