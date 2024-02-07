import { useState } from "react";
import AvailableListing from "./AvailableListing";
import Button from "../ui/Button";

const PricingAndFloorPlans = ({ data }: { data: any }) => {
  const [seeAll, setSeeAll] = useState<boolean>(false);
  if (!data.floorPlans) {
    return <div>Loading floor plans...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {!seeAll
        ? data.floorPlans
            .slice(0, 3)
            .map((plan: any, index: number) => (
              <AvailableListing key={index} {...plan} />
            ))
        : data.floorPlans.map((plan: any, index: number) => (
            <AvailableListing key={index} {...plan} />
          ))}
      {!seeAll && data.floorPlans.length > 3 ? (
        <Button
          text="See All Units"
          variant="ghost"
          onClick={() => setSeeAll(true)}
        />
      ) : (
        <Button
          text="See Less Units"
          variant="ghost"
          onClick={() => setSeeAll(false)}
        />
      )}
    </div>
  );
};

export default PricingAndFloorPlans;
