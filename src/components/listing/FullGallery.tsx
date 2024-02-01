import React from "react";

const FullGallery = ({ data }: { data: any }) => {
  return (
    <div className="absolute w-screen overflow-auto bg-white z-[9999] gap-2 grid grid-cols-4">
      {data &&
        data.photoUrlsHighRes.map((img: { url: string }) => {
          return (
            <div className="row-span-1 overflow-hidden object-cover">
              <img src={img.url} alt="" className="w-full h-[250px]" />
            </div>
          );
        })}
    </div>
  );
};

export default FullGallery;
