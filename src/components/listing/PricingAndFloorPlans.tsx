import AvailableListing from "./AvailableListing";

const PricingAndFloorPlans = ({ data }: { data: any }) => {
  if (!data.floorPlans) {
    return <div>Loading floor plans...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {data.floorPlans.map((plan: any, index: number) => (
        <AvailableListing key={index} {...plan}/>
      ))}
    </div>
  );
};

export default PricingAndFloorPlans;
