import React from "react";
import { SAMPLE_IMAGES } from "../../DATA";

const ListingPhotoGallery = () => {
  return (
    <div className="w-screen bg-bg-light flex flex-col font-poppins">
      <div className="h-[250px] grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 md:flex-nowrap overflow-auto gap-1 md:h-1/2">
        {SAMPLE_IMAGES.map((img, index) => {
          return index === 0 ? (
            <div className="w-auto h-full md:row-span-2 md:col-span-2">
              <img src={img.link} alt="listing" className="w-full h-full" />
            </div>
          ) : (
            <div className="w-full md:row-span-1 md:col-span-1">
              <img src={img.link} alt="listing" className="w-full h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListingPhotoGallery;
