import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonFeatureListing = () => {
  return (
    <div className="w-[350px] h-[400px] bg-white shadow-md flex flex-col gap-2 rounded-xl overflow-hidden hover:scale-105 cursor-pointer">
      <div className="h-[200px] w-full object-cover">
        <Skeleton height="100%" />
      </div>
      <div className="w-full h-[150px] p-4 flex flex-col justify-center items-center gap-2">
        <div className="w-full h-full">
          <Skeleton count={3} height={20} width="100%" />
        </div>
        <div className="w-full">
          <Skeleton count={1} height={20} width="100%" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonFeatureListing;
