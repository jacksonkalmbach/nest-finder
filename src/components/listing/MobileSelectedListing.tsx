import { useContext } from "react";
import { RootStoreContext } from "../../context/RootStoreContext";

const MobileSelectedListing = () => {
  const { locationsSearchStore } = useContext(RootStoreContext);
  const id = locationsSearchStore.selectedListing;
  return (
    <>
      {id !== "" && (
        <div className="absolute bottom-0 right-0 bg-white flex w-screen z-50 h-[150px] rounded-t-xl">
          <div className="bg-bg-light w-2/5 h-full">
            <img src="" />
          </div>
          <div className="p-2">
            <p className="font-medium text-lg">{id}</p>
            <p className="text-sm text-text-gray">bed bath</p>
            <p className="mt-4">address</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSelectedListing;
