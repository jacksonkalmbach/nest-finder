interface Props {
  fees: string[];
  petPolicy: string[];
  parkingFeatures: string[];
}

const FeesAndPolicies = ({ fees, petPolicy, parkingFeatures }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {Object.keys(fees).length > 0 && (
        <div>
          <p className="text-lg font-medium">Fees</p>
          <ul className="flex flex-col">
            {fees.map((fee) => {
              return (
                <li className="flex gap-1">
                  <p>{fee}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {Object.keys(petPolicy).length > 0 && (
        <div>
          <p className="text-lg font-medium">Pet Policy</p>
          {petPolicy.map((pet: string) => (
            <p>{pet}</p>
          ))}
        </div>
      )}
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
