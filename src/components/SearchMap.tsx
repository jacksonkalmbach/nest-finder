import { useState, useRef, useEffect, useContext } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { RootStoreContext } from "../context/RootStoreContext";
import { observer } from "mobx-react";

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
  zpid: string;
}

const CustomMarker = observer((props: CustomMarkerProps) => {
  const { locationsSearchStore } = useContext(RootStoreContext);
  const { lat, lon, img, address, price, zpid } = props;
  const isSelected = zpid === locationsSearchStore.selectedListing;
  const markerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={markerRef}
      style={{ cursor: "pointer" }}
      onClick={() => locationsSearchStore.setSelectedListing(zpid)}
    >
      <Marker latitude={lat} longitude={lon}>
        <div className={`relative ${isSelected ? "z-50" : "z-20"}`}>
          <MapPinIcon
            className={`w-7 h-7 ${
              !isSelected ? "text-text-gray" : "text-accent-blue scale-150"
            } hover:text-bg-light transition-all duration-150`}
            strokeWidth="1"
            stroke="white"
          />
        </div>
      </Marker>
    </div>
  );
});

const SearchMap = observer(({ srcData }: { srcData: any }) => {
  const [viewState, setViewState] = useState<{
    latitude: number;
    longitude: number;
    zoom: number;
  }>({ latitude: 0, longitude: 0, zoom: 10 });
  const [center, setCenter] = useState<{
    latitude: number;
    longitude: number;
    zoom: number;
  }>({
    latitude: 0,
    longitude: 0,
    zoom: 12,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    if (srcData && Array.isArray(srcData)) {
      setListings(srcData);
      const locations = srcData.map(
        (property: { latitude: number; longitude: number }) => {
          return {
            latitude: property.latitude,
            longitude: property.longitude,
          };
        }
      );

      let latSum = 0;
      let lngSum = 0;

      locations.forEach((location: any) => {
        latSum += location.latitude;
        lngSum += location.longitude;
      });

      const calculatedCenter = {
        latitude: latSum / locations.length,
        longitude: lngSum / locations.length,
        zoom: 10,
      };
      setViewState(calculatedCenter);
      setCenter(calculatedCenter);
      setIsLoading(false);
    }
  }, [srcData]);

  if (isLoading && listings.length === 0) {
    return (
      <div className="hidden md:flex justify-center items-center w-full h-full rounded-xl overflow-hidden">
        Loading map...
      </div>
    );
  }

  return (
    <>
      <div className="hidden md:flex w-full h-full rounded-xl overflow-hidden">
        <Map
          mapboxAccessToken={api_key}
          initialViewState={{
            longitude: center.longitude,
            latitude: center.latitude,
            zoom: 12,
          }}
          {...viewState}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {listings.length > 0 &&
            listings.map((loc: any) => {
              const { lotId, zpid } = loc;
              const { longitude, latitude } = loc;
              const id = lotId ? lotId.toString() : zpid.toString();
              return (
                <CustomMarker
                  lon={longitude}
                  lat={latitude}
                  price={1000}
                  zpid={id}
                />
              );
            })}
        </Map>
      </div>
    </>
  );
});

export default SearchMap;
