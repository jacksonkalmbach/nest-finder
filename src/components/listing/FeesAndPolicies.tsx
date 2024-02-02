interface Props {
  fees: {
    fee: string;
    type: string;
  }[];
  hasPetsAllowed: boolean;
  parkingFeatures: string[];
}

const FeesAndPolicies = ({ fees, hasPetsAllowed, parkingFeatures }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-lg font-medium">Fees</p>
        <ul className="flex flex-col">
          {fees.map((item) => {
            return (
              <li className="flex gap-1">
                <p className="f">{`${item.type} Fee: `}</p>
                <p>{item.fee}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="text-lg font-medium">Pet Policy</p>
        <p>{hasPetsAllowed ? "Pet-Friendly" : "No Pets Allowed"}</p>
      </div>
      <div>
        <p className="text-lg font-medium">Parking</p>
        {parkingFeatures.length > 0 ? (
          <ul className="flex flex-col">
            {parkingFeatures.map((type) => (
              <li>{type}</li>
            ))}
          </ul>
        ) : (
          <p>No Parking</p>
        )}
      </div>
    </div>
  );
};

export default FeesAndPolicies;
