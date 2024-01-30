import { useContext } from "react";
import { RootStoreContext } from "../context/RootStoreContext";
import { observer } from "mobx-react";
import { QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/solid";

const ToggleView = observer(() => {
  const { uiStore } = useContext(RootStoreContext);
  const handleClick = () => {
    uiStore.toggleListingView();
  };
  return (
    <div className="hidden md:flex justify-center items-center gap-2">
      <Squares2X2Icon
        onClick={handleClick}
        className={`${
          uiStore.listingView === "grid" ? "text-accent-blue" : "text-text-gray"
        } w-6 h-6 cursor-pointer`}
      />
      <QueueListIcon
        onClick={handleClick}
        className={`${
          uiStore.listingView === "queue"
            ? "text-accent-blue"
            : "text-text-gray"
        } w-6 h-6 cursor-pointer`}
      />
    </div>
  );
});

export default ToggleView;
