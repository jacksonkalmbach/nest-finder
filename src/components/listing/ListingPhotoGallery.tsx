import React from "react";
import { SAMPLE_IMAGES } from "../../DATA";
import Button from "../ui/Button";

interface Props {
  photos: {
    url: string;
  }[];
}

const ListingPhotoGallery = ({ photos }: Props) => {
  return (
    <div className="w-full h-full lg:px-20 md:pt-8">
      <div className="relative w-full h-full grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 gap-1 md:rounded-xl overflow-hidden">
        {photos.slice(0, 5).map((img, index) => {
          return index === 0 ? (
            <div className="md:row-span-2 md:col-span-2 overflow-hidden">
              <img
                src={img.url}
                alt="listing"
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="hidden md:flex w-full md:row-span-1 md:col-span-1 overflow-hidden">
              <img
                src={img.url}
                alt="listing"
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
        <div className="hidden md:block absolute w-[100px] bottom-5 right-5">
          <Button text="View All" variant="seeThrough" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ListingPhotoGallery;
