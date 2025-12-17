// import styles from "./Map.module.css";import React from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const { cities } = useCities();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  let mapLat = searchParams.get("lat");
  let mapLng = searchParams.get("lng");

  const center = [38.727881642324164, -9.140900099907554];

  return (
    <div style={{ height: "93.5vh", width: "100%" }} className="rounded-b-md">
      <MapContainer
        center={(center)}
        zoom={6}
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
