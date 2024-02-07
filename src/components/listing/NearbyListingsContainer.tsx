import { Link } from "react-router-dom";

interface Props {
  data: {
    address: {
      streetAddress: string;
      city: string;
      zipcode: string;
      state: string;
    };
    price: number;
    zpid: number;
    miniCardPhotos: {
      url: string;
    }[];
  }[];
}

const NearbyListingsContainer = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 flex-wrap gap-3 p-2">
      {data.slice(0, 4).map((apt: any) => {
        return (
          <Link
            className="flex w-full flex-col items-center overflow-hidden rounded-xl shadow-md cursor-pointer"
            to={`/zpid/${apt.zpid}`}
          >
            <div className="w-full object-fit">
              <img
                src={apt.miniCardPhotos[0].url}
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="p-2 text-center">
              <p className="font-medium text-sm md:text-lg">
                ${apt.price.toLocaleString()}
              </p>
              <p className="text-xs md:text-base">
                {apt.address.streetAddress}
              </p>
              <p className="text-xs md:text-base">{apt.address.city}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NearbyListingsContainer;
