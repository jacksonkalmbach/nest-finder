import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ListingPhotoGallerySkeleton = () => {
  return (
    <div className="w-full h-full lg:px-20 md:pt-8">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-1 md:rounded-xl overflow-hidden">
        <div className="row-span-2 col-span-2 overflow-hidden px-1">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden hidden md:block">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 ml-1 overflow-hidden hidden md:block">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden hidden md:block">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 ml-1 overflow-hidden hidden md:block">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default ListingPhotoGallerySkeleton;
