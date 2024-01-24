import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import CustomMarker from "./CustomMarker";

const SearchMap = () => {
  return (
    <div className="hidden md:block w-full h-full rounded-xl overflow-hidden">
      <Map
        mapboxAccessToken=""
        initialViewState={{
          longitude: -74.006,
          latitude: 40.7128,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker latitude={40.758} longitude={-73.9855}>
          <CustomMarker />
        </Marker>
        <Marker latitude={40.7484} longitude={-73.9857}>
          <CustomMarker />
        </Marker>
        <Marker latitude={40.7295} longitude={-73.9965}>
          <CustomMarker />
        </Marker>
      </Map>
    </div>
  );
};

export default SearchMap;
