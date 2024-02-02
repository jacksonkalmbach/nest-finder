import { Separator } from "@radix-ui/themes";
import { observer } from "mobx-react";
import { useContext } from "react";
import { RootStoreContext } from "../context/RootStoreContext";
import { useNavigate } from "react-router-dom";

const RecentlyViewed = observer(() => {
  const navigate = useNavigate();
  const { uiStore } = useContext(RootStoreContext);

  return (
    <>
      {uiStore.recentlyViewed.length > 1 && (
        <div className="bg-white rounded-xl p-6 flex flex-col justify-start items-center">
          <p className="font-medium text-xl text-center mb-2">
            Recently Viewed
          </p>
          <div className="flex flex-col-reverse gap-2 w-full">
            {uiStore.recentlyViewed.slice(0, 3).map((apt: any) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/${apt.zpid}`);
                  }}
                  className="bg-bg-light h-[80px] w-full rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer"
                >
                  <p className="font-medium text-center">{apt.title}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm">${apt.price.toLocaleString()}</p>
                    {apt.bed && <Separator orientation="vertical" />}
                    {apt.bed && <p className="text-sm">{apt.bed} Bd</p>}
                    {apt.bath && <Separator orientation="vertical" />}
                    {apt.bath && <p className="text-sm">{apt.bath} Ba</p>}
                    {apt.sqft && <Separator orientation="vertical" />}
                    {apt.sqft && <p className="text-sm">{apt.sqft} sf</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
});

export default RecentlyViewed;
