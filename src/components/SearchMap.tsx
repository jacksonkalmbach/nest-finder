import { useState, useRef, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const api_key = process.env.REACT_APP_MAP_API_KEY as string;

interface Props {
  locations: {
    latitude: number;
    longitude: number;
  }[];
}

interface CustomMarkerProps {
  lat: number;
  lon: number;
  img?: string;
  address?: string;
  price?: number;
  zpid?: number;
}

const CustomMarker = (props: CustomMarkerProps) => {
  const { lat, lon, img, address, price, zpid } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        markerRef.current &&
        !markerRef.current.contains(event.target as Node)
      ) {
        setIsSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={markerRef}
      className="z-10"
      onClick={() => setIsSelected(!isSelected)}
      style={{ cursor: "pointer" }}
    >
      <Marker latitude={lat} longitude={lon}>
        <div className={`relative ${isSelected ? "z-30" : "z-20"}`}>
          <MapPinIcon
            className={`w-7 h-7 ${
              isSelected ? "text-bg-light" : "text-accent-blue"
            } hover:text-bg-light`}
            strokeWidth="1"
            stroke="white"
          />
          {/* {isSelected && (
            <Link
              to={`${zpid}`}
              className="absolute z-50 -top-56 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-xl shadow-lg"
            >
              <div className="h-[150px] w-[200px] object-cover rounded-xl overflow-hidden">
                <img src={img} alt="" className="w-full h-full" />
              </div>
              <div>
                <p className="font-medium text-base">
                  ${price.toLocaleString()}
                </p>
                <p className="text-base">{address}</p>
              </div>
            </Link>
          )} */}
        </div>
      </Marker>
    </div>
  );
};

const SearchMap = ({ data }: { data: any }) => {
  console.log("LNGLAT - Searchmap.tsx", data);
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  }); // Default to a sensible default
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      const locations = data.map((location: any) => ({
        latitude: location.latitude,
        longitude: location.longitude,
      }));

      let latSum = 0;
      let lngSum = 0;

      locations.forEach((location: any) => {
        latSum += location.latitude;
        lngSum += location.longitude;
      });

      const calculatedCenter = {
        lat: latSum / locations.length,
        lng: lngSum / locations.length,
      };
      setCenter(calculatedCenter);
    } else {
      setCenter({ lat: 0, lng: 0 }); // Replace with your actual default lat, lng
    }
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return <div>Loading map...</div>;
  }

  return (
    <>
      <div className="hidden md:flex w-full h-full rounded-xl overflow-hidden">
        <Map
          mapboxAccessToken={api_key}
          initialViewState={{
            longitude: center.lng,
            latitude: center.lat,
            zoom: 10,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {data.map((loc: any) => {
            const { longitude, latitude } = loc;
            return (
              <CustomMarker
                lon={longitude}
                lat={latitude}
                price={1000}
                zpid={100000}
              />
            );
          })}
        </Map>
      </div>
    </>
  );
};

export default SearchMap;
