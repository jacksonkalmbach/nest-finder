import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import CustomMarker from "./CustomMarker";

const api_key = process.env.REACT_APP_MAP_API_KEY as string;

interface Props {
  locations: {
    latitude: number;
    longitude: number;
  }[];
}

const SearchMap = ({ locations }: Props) => {
  return (
    <div className="hidden md:flex w-full rounded-xl overflow-hidden">
      <Map
        mapboxAccessToken=""
        initialViewState={{
          longitude: -87.633636,
          latitude: 41.925709,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {locations.length > 0 &&
          locations.map((loc: any) => {
            if (
              !loc ||
              loc.latitude === undefined ||
              loc.longitude === undefined
            ) {
              return null;
            }
            const { location, price } = loc;
            const { latitude, longitude } = location;
            return (
              <Marker latitude={latitude} longitude={longitude}>
                <CustomMarker price={1000} />
              </Marker>
            );
          })}
      </Map>
    </div>
  );
};

export default SearchMap;
